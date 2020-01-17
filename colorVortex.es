#define distance 2.84 (float:0-5)
#define rot 8.14 (float:0-10)


20 * { color blue hue 3  z distance  rz rot } column
20 * { color blue hue 3 z -distance rz -rot } column

rule column {
	row
	20 * {  hue 3 s 1.02  x distance rx -rot  } row
	20 * {  hue -3 s 1.02  x -distance rx rot  } row
}

rule row {
	box
	20 * {  hue 3 sat 0.98  y distance ry rot } box
	20 * {  hue -3  sat 0.98 y -distance ry -rot } box
}