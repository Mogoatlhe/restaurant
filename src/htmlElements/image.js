
export class Image{

    _image;

     constructor(src, alt, className){
         this._image = document.createElement("img");
         this._image.setAttribute("src", src);
         this._image.setAttribute("alt", alt);

         if(className !== undefined){
             this._image.classList.add(className);
         }
     }

     getImage(){
         return this._image;
     }
}