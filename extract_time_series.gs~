#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Extract time series of the area of study'


'reinit'
'set display color white'
'c'
'open /vol3/nice/output1/pre_amz_neb_regcm_exp1_2001-2005_monmean.nc.ctl'
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
'set ccolor 2'

******** Plot box AMZ **********

* area AMZ (A1)
 x1=-63; x2=-55; y1=-9; y2=-1;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x1+1.0' 'y1+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A1'' 

* area AMZ NE (A2)
 x3=-53.5; x4=-47.5; y3=-3.55; y4=3.5;
'q ll2xy 'x3' 'y3''; pp1=sublin(result,1); 
'q ll2xy 'x4' 'y4''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x3+1.0' 'y3+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A2''

* area AMZ ANDES1 (A3)
 x5=-75; x6=-71; y5=-15; y6=-11;
'q ll2xy 'x5' 'y5''; pp1=sublin(result,1); 
'q ll2xy 'x6' 'y6''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x5+1.0' 'y5+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A3''

* area AMZ NO (A4)
 x7=-70; x8=-66; y7=-1; y8=3;
'q ll2xy 'x7' 'y7''; pp1=sublin(result,1); 
'q ll2xy 'x8' 'y8''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x7+1.0' 'y7+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A4''

* area AMZ SU (A5)
 x9=-73; x10=-65; y9=-10; y10=-3;
'q ll2xy 'x9' 'y9''; pp1=sublin(result,1); 
'q ll2xy 'x10' 'y10''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x9+1.0' 'y9+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A5''

******** Plot box NEB **********

* area NEB NE (A6)
 x11=-47; x12=-38; y11=-5.5; y12=-1;
'q ll2xy 'x11' 'y11''; pp1=sublin(result,1); 
'q ll2xy 'x12' 'y12''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x11+1.0' 'y11+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A6''

# area NEB CENTRAL (A7)
 x13=-48; x14=-38; y13=-11; y14=-6;
'q ll2xy 'x13' 'y13''; pp1=sublin(result,1); 
'q ll2xy 'x14' 'y14''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x13+1.0' 'y13+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A7''

# area NEB LESTE (A8)
 x15=-37.5; x16=-34; y15=-11; y16=-5;
'q ll2xy 'x15' 'y15''; pp1=sublin(result,1); 
'q ll2xy 'x16' 'y16''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x15+2.0' 'y15+2.5''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A8''

*************** Extract time series ********************

'set x 1'
'set y 1'

* VC COLOCA AS COORDENADAS DA ÁREA QUE VC
* DESEJA, VERIFIQUE SE OS DADOS VARIAM DE 180 A 180
* OU DE 0 A 360

# area NS
'set t 1 367'
'rain_A1=aave(pr,lon='x1',lon='x2',lat='y1',lat='y2')'

'rain_A2=aave(pr,lon='x3',lon='x4',lat='y3',lat='y4')'

'rain_A3=aave(pr,lon='x5',lon='x6',lat='y5',lat='y6')'

'rain_A4=aave(pr,lon='x7',lon='x8',lat='y7',lat='y8')'

'rain_A5=aave(pr,lon='x9',lon='x10',lat='y9',lat='y10')'

'rain_A6=aave(pr,lon='x11',lon='x12',lat='y11',lat='y12')'

'rain_A7=aave(pr,lon='x13',lon='x14',lat='y13',lat='y14')'

'rain_A8=aave(pr,lon='x15',lon='x16',lat='y15',lat='y16')'

* COLOQUE O TEMPO FINAL

tt=1; while(tt<=367); 
'set t 'tt''

***************************

'd rain_A1'

obs = subwrd(result,4)
say obs

res = write('/vol3/nice/time_series_exp/exp1_A1_pre_2001_2005.dat',obs)

***************************

'd rain_A2'

obs1 = subwrd(result,4)
say obs1

res1 = write('/vol3/ANACLEIDE/MAM2012/Agust_'exp'_NS_pr_201203_201205.dat',obs1)

***************************

'd rain_A3'

obs2 = subwrd(result,4)
say obs2

res2 = write('/vol3/ANACLEIDE/MAM2012/Agust_'exp'_SS_pr_201203_201205.dat',obs2)

***************************

'd rain_A4'

obs3 = subwrd(result,4)
say obs3

res3 = write('/vol3/ANACLEIDE/MAM2012/Agust_'exp'_SS1_pr_201203_201205.dat',obs3)

***************************
'd rain_A5'

obs4 = subwrd(result,4)
say obs4

res4 = write('/vol3/ANACLEIDE/MAM2012/Agust_'exp'_NC_pr_201203_201205.dat',obs4)

***************************
'd rain_A6'

obs5 = subwrd(result,4)
say obs5

res5 = write('/vol3/ANACLEIDE/MAM2012/Agust_'exp'_SC_pr_201203_201205.dat',obs5)

***************************

'd rain_A7'

obs6 = subwrd(result,4)
say obs6

res6 = write('/vol3/ANACLEIDE/MAM2012/Agust_'exp'_NW-A_pr_201203_201205.dat',obs6)

***************************

'd rain_A8'

obs7 = subwrd(result,4)
say obs7

res7 = write('/vol3/ANACLEIDE/MAM2012/Agust_'exp'_NE-A_pr_201203_201205.dat',obs7)

***************************
'q time'
data = subwrd(result,60)
say data

resd = write('/vol3/ANACLEIDE/MAM2012/data.dat',data)
*****************************

 
 tt=tt+1; endwhile
