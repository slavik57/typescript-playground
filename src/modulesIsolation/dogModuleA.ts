// The video for this file:
// https://youtu.be/t_VGUAGgJWw

let dogName = 'Spotty';

export function changeDogName(newName: string){
    dogName = newName;
}

export function logDogName(){
    console.log('dogModuleA', dogName);
}