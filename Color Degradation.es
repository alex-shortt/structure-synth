set background white

{ h 50 sat 0.9 } go

rule go md 50 {
	ring
	{ h 10 z 1 s 0.99 } go
}

rule ring md 50 {
	box
	{ x 0.4 rx 1 s 0.995 sat 0.99 } ring
}

rule ring md 50 {
	box
	{ x 0.4 rz 1 s 1.05 sat 0.99 b 0.99 } ring
}


rule ring md 50 {
	box
	{ x 0.5 ry 1 s 1.05 sat 0.99 } ring
}
