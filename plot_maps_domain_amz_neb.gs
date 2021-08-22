#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '07/04/2018'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'open /home/nice/reg_amz_neb_historical_DOMAIN000.nc.ctl'

'set vpage 0.5 11 0 8.5'
'set mpdset mresbr'

'set grid on'
'set xlint 5'
'set ylint 3'
'set grads off'

'colormap -map ncl_topo -levels 0 4500 100'
'd topo'

'cbarm'
'set font 5'
'set ccolor 1'

******** Plot box  NOTH AMAZONIA **********

 x1=-72; x2=-49; y1=-3; y2=6;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x1+6.0' 'y1+3.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'NAMZ'' 

************ Plot box SOUTH AMAZONIA ************

 x3=-72; x4=-49; y3=-12; y4=-3;
'q ll2xy 'x3' 'y3''; pp1=sublin(result,1); 
'q ll2xy 'x4' 'y4''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x3+6.0' 'y3+6.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'SAMZ''

************ Plot box NOTHEAST ************

 x5=-49; x6=-35; y5=-18; y6=-2;
'q ll2xy 'x5' 'y5''; pp1=sublin(result,1); 
'q ll2xy 'x6' 'y6''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x5+6.0' 'y5+6.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'NEB''

'printim /home/nice/topo_amz_neb.png png white'
