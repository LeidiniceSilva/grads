#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'c'
'open /vol3/nice/output1/pre_amz_neb_regcm_exp1_2001-2005.nc.ctl'
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

************ Plot box NORTHEAST ************

# area Litoral leste Nordeste
 x1=-36; x2=-34.5; y1=-10; y2=-5;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x1' 'y1+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A6''

# area Semiárido Norte Nordeste
 x3=-41.3; x4=-36.3; y3=-8; y4=-2.5;
'q ll2xy 'x3' 'y3''; pp1=sublin(result,1); 
'q ll2xy 'x4' 'y4''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x3+1.0' 'y3+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A7''

# area Semiárido Sul Nordeste
 x5=-46.5; x6=-37.5; y5=-12; y6=-8.7;
'q ll2xy 'x5' 'y5''; pp1=sublin(result,1); 
'q ll2xy 'x6' 'y6''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x5+1.0' 'y5+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A8''

# area Sul da bahia
 x9=-41; x10=-37.8; y9=-18.3; y10=-12.2;
'q ll2xy 'x9' 'y9''; pp1=sublin(result,1); 
'q ll2xy 'x10' 'y10''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x9+1.0' 'y9+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A9''

# area Nordeste
 x11=-46.5; x12=-42.5; y11=-8; y12=-2;
'q ll2xy 'x11' 'y11''; pp1=sublin(result,1); 
'q ll2xy 'x12' 'y12''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x11+1.0' 'y11+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A10''

******** Plot box  AMAZONIA **********

# area Acre e Amazonas
 x13=-72; x14=-62; y13=-10; y14=-4;
'q ll2xy 'x13' 'y13''; pp1=sublin(result,1); 
'q ll2xy 'x14' 'y14''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x13+1.0' 'y13+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A1'' 

# area Roraima
 x15=-63.8; x16=-58.5; y15=-1.9; y16=5.5;
'q ll2xy 'x15' 'y15''; pp1=sublin(result,1); 
'q ll2xy 'x16' 'y16''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x15+1.0' 'y15+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A2''

# area Noroeste Amazonas
 x17=-71; x18=-64.9; y17=-2; y18=2;
'q ll2xy 'x17' 'y17''; pp1=sublin(result,1); 
'q ll2xy 'x18' 'y18''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x17+1.0' 'y17+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A3''

# area Norte Para
 x19=-57; x20=-49; y19=-4; y20=2;
'q ll2xy 'x19' 'y19''; pp1=sublin(result,1); 
'q ll2xy 'x20' 'y20''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x19+1.0' 'y19+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A4''

# area Centro Para
 x21=-57; x22=-48.3; y21=-9.5; y22=-5;
'q ll2xy 'x21' 'y21''; pp1=sublin(result,1); 
'q ll2xy 'x22' 'y22''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x21+1.0' 'y21+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A5''

# area Andes Sul
 x23=-75; x24=-68; y23=-15.5; y24=-12;
'q ll2xy 'x23' 'y23''; pp1=sublin(result,1); 
'q ll2xy 'x24' 'y24''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x23+1.0' 'y23+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A6''

# area Andes Norte
 x25=-78; x26=-74.5; y25=-10; y26=-3;
'q ll2xy 'x25' 'y25''; pp1=sublin(result,1); 
'q ll2xy 'x26' 'y26''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x25+1.0' 'y25+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A7''

'printim /vol3/nice/results/regcm4.6.0_exp/areas_amz_neb.png png white'
