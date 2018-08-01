#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'c'
'sdfopen /home/nice/Documentos/pre_amz_neb_regcm_exp1_2001-2005_clim.nc'
'set mpdset brmap_hires'
'set map 15 1 3'
'set grid off'
'set ylopts 1 6 .1'
'set gxout contour'
'set cmin 10000000000'
'set xlopts 1 5 .1'
'set xlint 5'
'set ylopts 1 5 .1'
'set ylint 2'
'set grads off'
'd pr'
'draw title Areas of Study - AMZ_NEB'
'draw xlab Longitude'

'set font 1'
'set ccolor 3'

******** Plot box AMZ **********

* area AMZ central
 x1=-63; x2=-55; y1=-9; y2=-1;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x1+1.0' 'y1+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A1'' 

* area AMZ NE
 x3=-53.5; x4=-47.5; y3=-3.55; y4=3.5;
'q ll2xy 'x3' 'y3''; pp1=sublin(result,1); 
'q ll2xy 'x4' 'y4''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x3+1.0' 'y3+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A2''

* area AMZ ANDES1
 x5=-75; x6=-71; y5=-15; y6=-11;
'q ll2xy 'x5' 'y5''; pp1=sublin(result,1); 
'q ll2xy 'x6' 'y6''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x5+1.0' 'y5+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A3''

* area AMZ NO
 x7=-70; x8=-66; y7=-1; y8=3;
'q ll2xy 'x7' 'y7''; pp1=sublin(result,1); 
'q ll2xy 'x8' 'y8''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x7+1.0' 'y7+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A4''

* area AMZ SU
 x9=-73; x10=-65; y9=-10; y10=-3;
'q ll2xy 'x9' 'y9''; pp1=sublin(result,1); 
'q ll2xy 'x10' 'y10''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x9+1.0' 'y9+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A5''

******** Plot box NEB **********

* area NEB NE
 x11=-47; x12=-38; y11=-5.5; y12=-1;
'q ll2xy 'x11' 'y11''; pp1=sublin(result,1); 
'q ll2xy 'x12' 'y12''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x11+1.0' 'y11+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A6''

# area NEB CENTRAL
 x13=-48; x14=-38; y13=-11; y14=-6;
'q ll2xy 'x13' 'y13''; pp1=sublin(result,1); 
'q ll2xy 'x14' 'y14''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x13+1.0' 'y13+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A7''

# area NEB LESTE
 x15=-37.5; x16=-34; y15=-11; y16=-5;
'q ll2xy 'x15' 'y15''; pp1=sublin(result,1); 
'q ll2xy 'x16' 'y16''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x15+2.0' 'y15+2.5''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A8''

'printim /home/nice/Documentos/areas_amz_neb.jpeg jpeg white'

