'use strict';

var path;

function largStr() {
    return new Array(1000000).join('x');
}

function Z1(child1) {
    this.child1 = child1;
}
function Z2(child1) {
    this.child1 = child1;
}

function Y1(child1, child2) {
    this.child1 = child1;
    this.child2 = child2;
}

function Y2() {
}

function X1(child1) {
    this.child1 = child1;
}
function X2(child1) {
    this.child1 = child1;
}
function X3(child1) {
    this.child1 = child1;
}

function W(child1, child2, child3) {
    this.child1 = child1;
    this.child2 = child2;
    this.child3 = child3;

}

function Item() {
    this.content = largStr();
}

function createObjects() {
    var item = new Item(),
        z1 = new Z1(item),
        z2 = new Z2(item),
        y1 = new Y1(z1, z2),
        y2 = new Y2(),
        x1 = new X1(y1),
        x2 = new X2(y1),
        x3 = new X3(y2),
        w = new W(x1, x2, x3);

    path = w;
}
