#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '07/04/18'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'open /home/nice/reg_hist_DOMAIN000.nc.ctl'

'color 0 2000 200 -kind white->green->gray'
*'color.gs -gxout shaded -kind white->springgreen->lime->seagreen->darkgreen 0 3000 200'

'set mpdset mresbr'
'set map 1 1 6'
'set grid on'
'set xlopts 1 5 .15'
'set xlint 6'
'set ylopts 1 5 .15'
'set ylint 4'
'set grads off'
'd topo'

'cbarm'
'set font 5'
'set ccolor 1'

******** Plot box  AMAZONIA **********

# area amz
 x1=-68; x2=-52; y1=-12; y2=-3;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x1+1.5' 'y1+8.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A1'' 

************ Plot box NORTHEAST ************

# area neb
 x3=-40; x4=-35; y3=-16; y4=-3;
'q ll2xy 'x3' 'y3''; pp1=sublin(result,1); 
'q ll2xy 'x4' 'y4''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x3+4.0' 'y3+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A2''

************ Plot box MATOPIBA ************

# area matopiba
 x5=-50.5; x6=-42.5; y5=-15; y6=-2.5;
'q ll2xy 'x5' 'y5''; pp1=sublin(result,1); 
'q ll2xy 'x6' 'y6''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x5+2.0' 'y5+12.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A3''

'printim /home/nice/topo_amz_neb.png png white'
