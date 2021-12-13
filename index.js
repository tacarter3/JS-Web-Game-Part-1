
let green = ['greenCharacter', 'assets/green-character.gif','100px', '100px']
let pine = ['pineTree', 'assets/pine-tree.png','450px', '200px']
let oak = ['oakTree', 'assets/tree.png', '200px', '300px']
let pillar = ['pillar','assets/pillar.png', '350px', '100px']
let crate = ['crate', 'assets/crate.png', '150px', '200px']
let well = ['well', 'assets/well.png', '500px', '425px']

function newImage(imageName) {


imageName[0] = document.createElement('img')
imageName[0].src = imageName[1]
imageName[0].style.position = 'fixed'
imageName[0].style.left = imageName[2]
imageName[0].style.bottom = imageName[3]
document.body.append(imageName[0])

}

newImage(green)
newImage(pine)
newImage(oak)
newImage(pillar)
newImage(crate)
newImage(well)

sword = ['sword', 'assets/sword.png', '500px', '405px']
shield = ['shield', 'assets/shield.png', '165px', '185px']
staff = ['staff', 'assets/staff.png', '600px', '100px']


function newItem(itemName) {
    newImage(itemName)

itemName[0].addEventListener('dblclick', function() {
    itemName[0].remove()
})

}
newItem(sword)
newItem(shield)
newItem(staff)

for (let i = 1; i < 43; i++) {

let sky = document.createElement('img')
sky.src = 'assets/sky.png'
document.body.append(sky)
}


for (let i = 1; i < 71; i++) {
    
    let grass = document.createElement ('img')
    grass.src = 'assets/grass.png'
    document.body.append(grass)
    
}
