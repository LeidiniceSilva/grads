#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'c'
'open /vol3/disco1/nice/output1/pre_amz_neb_regcm_exp1_2001-2005.nc.ctl'
'set mpdset brmap_hires'
'set map 15 1 3'
'set grid off'
'set ylopts 1 6 .1'
'set gxout contour'
'set cmin 10000000000'
'set xlopts 1 5 .1'
'set xlint 5'
'set ylopts 1 5 .1'
'set ylint 3'
'set grads off'
'd pr'
'draw title Areas de Estudo - AMZ_NEB'
'draw xlab Longitude'

'set font 1'
'set ccolor 2'

******** Plot box  AMAZONIA **********

# area Acre e Amazonas
 x1=-72; x2=-62; y1=-10; y2=-4;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x1+1.0' 'y1+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A1'' 

# area Roraima
 x3=-63.8; x4=-58.5; y3=-1.9; y4=5.5;
'q ll2xy 'x3' 'y3''; pp1=sublin(result,1); 
'q ll2xy 'x4' 'y4''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x3+1.0' 'y3+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A2''

# area Noroeste Amazonas
 x5=-71; x6=-64.9; y5=-2; y6=2;
'q ll2xy 'x5' 'y5''; pp1=sublin(result,1); 
'q ll2xy 'x6' 'y6''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x5+1.0' 'y5+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A3''

# area Norte Para
 x7=-57; x8=-49; y7=-4; y8=2;
'q ll2xy 'x7' 'y7''; pp1=sublin(result,1); 
'q ll2xy 'x8' 'y8''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x7+1.0' 'y7+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A4''

# area Centro Para
 x9=-57; x10=-48.3; y9=-9.5; y10=-5;
'q ll2xy 'x9' 'y9''; pp1=sublin(result,1); 
'q ll2xy 'x10' 'y10''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x9+1.0' 'y9+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A5''

# area Andes Sul
 x11=-75; x12=-68; y11=-15.5; y12=-12;
'q ll2xy 'x11' 'y11''; pp1=sublin(result,1); 
'q ll2xy 'x12' 'y12''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x11+1.0' 'y11+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A6''

# area Andes Norte
 x13=-78; x14=-74.5; y13=-10; y14=-3;
'q ll2xy 'x13' 'y13''; pp1=sublin(result,1); 
'q ll2xy 'x14' 'y14''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x13+1.0' 'y13+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A7''

************ Plot box NORTHEAST ************

# area Litoral leste Nordeste
 x15=-36; x16=-34.5; y15=-10; y16=-5;
'q ll2xy 'x15' 'y15''; pp1=sublin(result,1); 
'q ll2xy 'x16' 'y16''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x15' 'y15+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A8''

# area Semiárido Norte Nordeste
 x17=-41.3; x18=-36.3; y17=-8; y18=-2.5;
'q ll2xy 'x17' 'y17''; pp1=sublin(result,1); 
'q ll2xy 'x18' 'y18''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x17+1.0' 'y17+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A9''

# area Semiárido Sul Nordeste
 x19=-46.5; x20=-37.5; y19=-12; y20=-8.7;
'q ll2xy 'x19' 'y19''; pp1=sublin(result,1); 
'q ll2xy 'x20' 'y20''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x19+1.0' 'y19+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A10''

# area Sul da bahia
 x21=-41; x22=-37.8; y21=-18.3; y22=-12.2;
'q ll2xy 'x21' 'y21''; pp1=sublin(result,1); 
'q ll2xy 'x22' 'y22''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x21+1.0' 'y21+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A11''

# area Nordeste
 x23=-46.5; x24=-42.5; y23=-8; y24=-2;
'q ll2xy 'x23' 'y23''; pp1=sublin(result,1); 
'q ll2xy 'x24' 'y24''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x23+1.0' 'y23+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A12''

'printim /vol3/disco1/nice/results/regcm4.6.0_exp/areas_amz_neb.png png white'
