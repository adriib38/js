/**
 * 
 * Drag and Drop File Uploads
 * 
 */

let extensionesTexto = ['txt', 'html', 'js', 'css', 'py', 'csv'];
let extensionesImagen = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
let extensionesVideo = ['mp4', 'avi', 'mov', 'mkv'];

const zona = document.querySelector('.zona-arrastre');

zona.addEventListener('dragover', e => {
    e.preventDefault();
    e.srcElement.innerHTML = 'Suelta!';
    changeStyle(e.srcElement, '#444');
});

zona.addEventListener('dragleave', e => {
    e.preventDefault();
    e.srcElement.innerHTML = 'Arrastra tus archivos aquí';
    changeStyle(e.srcElement, '#888');
});

zona.addEventListener('drop', e => {
    e.preventDefault();
    e.srcElement.innerHTML = 'Arrastra tus archivos aquí';
    changeStyle(e.srcElement, '#888');
    cargarArchivo(e.dataTransfer.files[0]);
});



const cargarArchivo = archivo => {
    const reader = new FileReader();
    reader.readAsText(archivo);

    //Imprimir progreso de carga
    reader.addEventListener('progress', e => {
        //Imprimimos evento progress
        let carga = (e.loaded / e.total * 100);
        zona.innerHTML = `Cargando... ${carga.toFixed(2)}%`;
    });

    //Finalizar carga
    reader.addEventListener('loadend', e => {
        //Imprimimos evento loadend
        zona.innerHTML = 'Arrastra tus archivos aquí';
    });

    //Evento error
    reader.addEventListener('error', e => {
        //Imprimimos evento error
        zona.innerHTML = 'Error al cargar el archivo';
    });

    //Evento cargar archivo
    reader.addEventListener('load', e => {
        //Imprimimos evento load
        //console.log(e.target);

        //Imprimimos informacion del archivo
        //console.log(archivo);
        let nombre = archivo.name;
        let extension = archivo.name.split('.').pop();
        
        //Si la extension del archivo es texto
        if (extensionesTexto.includes(extension)){
            document.querySelector('.resultado').textContent = e.currentTarget.result;
        }

        //Si la extension del archivo es una imagen
        if (extensionesImagen.includes(extension)){
            //Creamos un objeto URL
            let url = URL.createObjectURL(archivo);
            //Creamos un elemento img
            let img = document.createElement('img');
            //Asignamos la url al atributo src del elemento img
            img.setAttribute('src', url);
            //Agregamos el elemento img al DOM
            document.querySelector('.resultado').appendChild(img);
        }

        //Si la extension del archivo es un video
        if (extensionesVideo.includes(extension)){
            //Creamos un objeto URL
            let url = URL.createObjectURL(archivo);
            //Creamos un elemento video
            let video = document.createElement('video');
            //Asignamos la url al atributo src del elemento video
            video.setAttribute('src', url);
            video.setAttribute('controls', true);

            //Agregamos el elemento video al DOM
            document.querySelector('.resultado').appendChild(video);
        }

        if (!extensionesTexto.includes(extension) && !extensionesImagen.includes(extension) && !extensionesVideo.includes(extension)) zona.innerHTML = 'Formato no soportado';
       
    });
}

const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

