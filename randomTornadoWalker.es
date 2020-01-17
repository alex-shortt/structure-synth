tornado

rule tornado {
	{ color white y -0.5 } tornadoLayer
}

rule tornadoLayer md 100 {
	box
	{ sat  0.1 y 0.1 x 1 z 1 } tornadoLayer
}

rule tornadoLayer md 100 {
	box
	{ sat  0.1 y 0.1 x 1 z -1 } tornadoLayer
}

rule tornadoLayer md 100 {
	box
	{ sat  0.1 y 0.1 x -1 z 1 } tornadoLayer
}

rule tornadoLayer md 100 {
	box
	{ sat 0.1 y 0.1 x -1 z -1 } tornado
}