function Block(leter, rate, used, father, code) {
this.letter = letter;
this.used = used;
this.rate = rate;
this.father = father;
this.code = code;
}

function FindCode(block) {

if (tree[block.father].code != ") {
block.code = tree[block.father].code + `1`;
}
else {
if (block.lettern == tree[minIndex].letter) {
block.code = `0`;
}
else if (block.letter == tree[preminIndex].letter)
blocxk.code = `1`;
}
else {
FindCode(tree[block.father]);
block.code = tree[block.father].code + `0`;
}
}
}
