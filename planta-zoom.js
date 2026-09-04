(function () {
  var MIN = 1;
  var MAX = 4;
  var STEP = 0.2;

  function initFigure(figure) {
    if (figure.classList.contains('plan-view')) return;

    var media = figure.querySelector(':scope > svg, :scope > img');
    if (!media) return;

    figure.classList.add('plan-view');

    var toolbar = document.createElement('div');
    toolbar.className = 'plan-toolbar';
    toolbar.setAttribute('role', 'toolbar');
    toolbar.setAttribute('aria-label', 'Zoom da planta');
    toolbar.innerHTML =
      '<button type="button" data-act="out" aria-label="Diminuir zoom">−</button>' +
      '<span class="plan-zoom-level" aria-live="polite">100%</span>' +
      '<button type="button" data-act="in" aria-label="Aumentar zoom">+</button>' +
      '<button type="button" data-act="reset">Ajustar</button>' +
      '<span class="plan-hint">Scroll ou pinça · arrastar com zoom</span>';

    var viewport = document.createElement('div');
    viewport.className = 'plan-viewport';
    viewport.tabIndex = 0;

    var stage = document.createElement('div');
    stage.className = 'plan-stage';

    figure.insertBefore(toolbar, media);
    figure.insertBefore(viewport, media);
    viewport.appendChild(stage);
    stage.appendChild(media);

    var levelEl = toolbar.querySelector('.plan-zoom-level');
    var scale = 1;
    var tx = 0;
    var ty = 0;
    var dragging = false;
    var startX = 0;
    var startY = 0;
    var startTx = 0;
    var startTy = 0;
    var pinchStart = 0;
    var pinchScale = 1;

    function apply() {
      stage.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) scale(' + scale + ')';
      levelEl.textContent = Math.round(scale * 100) + '%';
      figure.classList.toggle('is-zoomed', scale > 1.01);
    }

    function resetView() {
      scale = 1;
      tx = 0;
      ty = 0;
      apply();
    }

    function zoomAt(nextScale, clientX, clientY) {
      var clamped = Math.min(MAX, Math.max(MIN, nextScale));
      if (clamped === scale) return;

      var rect = viewport.getBoundingClientRect();
      var x = clientX - rect.left;
      var y = clientY - rect.top;
      var ratio = clamped / scale;

      tx = x - ratio * (x - tx);
      ty = y - ratio * (y - ty);
      scale = clamped;

      if (scale <= 1) resetView();
      else apply();
    }

    function zoomBy(delta, clientX, clientY) {
      zoomAt(scale + delta, clientX, clientY);
    }

    toolbar.addEventListener('click', function (event) {
      var btn = event.target.closest('button');
      if (!btn) return;

      var rect = viewport.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var act = btn.getAttribute('data-act');

      if (act === 'in') zoomBy(STEP, cx, cy);
      else if (act === 'out') zoomBy(-STEP, cx, cy);
      else if (act === 'reset') resetView();
    });

    viewport.addEventListener('wheel', function (event) {
      event.preventDefault();
      zoomBy(event.deltaY < 0 ? STEP : -STEP, event.clientX, event.clientY);
    }, { passive: false });

    viewport.addEventListener('pointerdown', function (event) {
      if (scale <= 1 || event.button !== 0) return;
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      startTx = tx;
      startTy = ty;
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add('is-dragging');
    });

    viewport.addEventListener('pointermove', function (event) {
      if (!dragging) return;
      tx = startTx + (event.clientX - startX);
      ty = startTy + (event.clientY - startY);
      apply();
    });

    function endDrag(event) {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove('is-dragging');
      if (event.pointerId != null) {
        try { viewport.releasePointerCapture(event.pointerId); } catch (e) { /* noop */ }
      }
    }

    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);

    viewport.addEventListener('dblclick', function (event) {
      if (scale > 1.01) resetView();
      else zoomAt(2.2, event.clientX, event.clientY);
    });

    viewport.addEventListener('touchstart', function (event) {
      if (event.touches.length === 2) {
        var dx = event.touches[0].clientX - event.touches[1].clientX;
        var dy = event.touches[0].clientY - event.touches[1].clientY;
        pinchStart = Math.hypot(dx, dy);
        pinchScale = scale;
      }
    }, { passive: true });

    viewport.addEventListener('touchmove', function (event) {
      if (event.touches.length !== 2 || !pinchStart) return;
      event.preventDefault();
      var dx = event.touches[0].clientX - event.touches[1].clientX;
      var dy = event.touches[0].clientY - event.touches[1].clientY;
      var dist = Math.hypot(dx, dy);
      var cx = (event.touches[0].clientX + event.touches[1].clientX) / 2;
      var cy = (event.touches[0].clientY + event.touches[1].clientY) / 2;
      zoomAt(pinchScale * (dist / pinchStart), cx, cy);
    }, { passive: false });

    viewport.addEventListener('touchend', function () {
      pinchStart = 0;
    });

    apply();
  }

  document.querySelectorAll(
    'figure.hero-plan, figure:has(> svg), figure:has(> img[src*="layouts/"])'
  ).forEach(initFigure);
})();
