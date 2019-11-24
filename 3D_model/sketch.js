let img = [];

function preload() {
    for(var i=1;i<16;i++) {
        let path = "360/"+ i + ".jpg";
        img[i] = loadImage(path);
    }
}

function setup() {
	createCanvas(700,500);
    background(51);
}

let j = 1;

function draw() {
    img[j].resize(700,500);
    image(img[j],0,0);
}
    

function mouseDragged() {
    if(mouseIsPressed){
            if(mouseX>=pmouseX+10)
                if(j==15)
                    j=1;
                else
                    j++;
            else if (mouseX<=pmouseX-10)
                if(j==1)
                    j=15;
                else
                    j--;
            }
}