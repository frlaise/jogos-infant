function play(){document.getElementById("A1").play();}
function pause(){document.getElementById("A1").pause();}
// elementos de destino com a classe "draggable"
// elementos de destino com a classe "draggable"
interact('.draggable')
  .draggable({
    // permitir arremesso inercial
    inertia: true,

    // ativar rolagem automática
    autoScroll: false,

    // chame essa função em todo evento dragmove
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
    }
  
  });


 function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }







// permitir arrastar dragables para este
interact('.dropzone').dropzone({
  // aceita apenas elementos correspondentes a esse seletor CSS
  accept: '#drag-1, #drag-2, #drag-3, #drag-4, #drag-5, #drag-6, #drag-7, #drag-8, #drag-9, #drag-10, #drag-11, #drag-12',
  // Exigir uma sobreposição de elemento de 75% para que uma queda seja possível
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
  
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    event.relatedTarget.classList.remove('drop-ok');
  },
  ondrop: function (event) {
    event.relatedTarget.classList.add('drop-ok');
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});




