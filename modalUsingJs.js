// HTML
{/* <button id='openmodal'>Open Modal</button>

<div id='modal' class='modal hidden'> 
    <div class='modal-content'>
        <span id='closemodal' class='close'>&times;</span>
        <p>This is a modal</p>
    </div>
</div> */}


// css
// .modal {
//     position: fixed;
//     top: 0; left: 0; right: 0; bottom:0;
//     background: rgba(0,0,0,0.5);
//     display:flex;
//     justify-content: center;
//     align-items: center;
// }
// .modal .hidden{
//     display:none;
// }
// .modal-content {
//     background: white;
//     padding: 20px;
//     border-radius: 5px;
// }
// .close{
//     float: right;
//     cursor:PointerEvent;
// }

// js
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openmodal');
const closeBtn = document.getElementById('closemodal');

openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
// window.addEventListener('click', (e) => {
//     if(e.target === modal) modal.classList.add('hidden');
// });


// window shows error so committed