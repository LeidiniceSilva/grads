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
'draw title Areas de estudo - AMZ_NEB'
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

*************** Extract time series ********************

# You put on the coordinates of the area you want,
# check that the data vary from 180 to 180 or 0 360.
# area AMZ_NEB

'set x 1'
'set y 1'
'set t 1 12'

'rain_A1=aave(pr,lon='x1',lon='x2',lat='y1',lat='y2')'

'rain_A2=aave(pr,lon='x3',lon='x4',lat='y3',lat='y4')'

'rain_A3=aave(pr,lon='x5',lon='x6',lat='y5',lat='y6')'

'rain_A4=aave(pr,lon='x7',lon='x8',lat='y7',lat='y8')'

'rain_A5=aave(pr,lon='x9',lon='x10',lat='y9',lat='y10')'

'rain_A6=aave(pr,lon='x11',lon='x12',lat='y11',lat='y12')'

'rain_A7=aave(pr,lon='x13',lon='x14',lat='y13',lat='y14')'

'rain_A8=aave(pr,lon='x15',lon='x16',lat='y15',lat='y16')'

'rain_A9=aave(pr,lon='x17',lon='x18',lat='y17',lat='y18')'

'rain_A10=aave(pr,lon='x19',lon='x20',lat='y19',lat='y20')'

'rain_A11=aave(pr,lon='x21',lon='x22',lat='y21',lat='y22')'

'rain_A12=aave(pr,lon='x23',lon='x23',lat='y23',lat='y24')'


# Put on final time

tt=1; while(tt<=12); 
'set t 'tt''

***************************

'd rain_A1'

obs = subwrd(result,4)
say obs1

res = write('/vol3/nice/time_series/obs/obs_A1_pre_2005.dat',obs1)

***************************

'd rain_A2'

obs1 = subwrd(result,4)
say obs1

res1 = write('/vol3/nice/time_series/obs/Agust_'exp'_NS_pr_201203_201205.dat',obs1)

***************************

'd rain_A3'

obs2 = subwrd(result,4)
say obs2

res2 = write('/vol3/nice/time_series/obs/Agust_'exp'_SS_pr_201203_201205.dat',obs2)

***************************

'd rain_A4'

obs3 = subwrd(result,4)
say obs3

res3 = write('/vol3/nice/time_series/obs/Agust_'exp'_SS1_pr_201203_201205.dat',obs3)

***************************
'd rain_A5'

obs4 = subwrd(result,4)
say obs4

res4 = write('/vol3/nice/time_series/obs/Agust_'exp'_NC_pr_201203_201205.dat',obs4)

***************************
'd rain_A6'

obs5 = subwrd(result,4)
say obs5

res5 = write('/vol3/nice/time_series/obs/Agust_'exp'_SC_pr_201203_201205.dat',obs5)

***************************

'd rain_A7'

obs6 = subwrd(result,4)
say obs6

res6 = write('/vol3/nice/time_series/obs/Agust_'exp'_NW-A_pr_201203_201205.dat',obs6)

***************************

'd rain_A8'

obs7 = subwrd(result,4)
say obs7

res7 = write('/vol3/nice/time_series/obs/Agust_'exp'_NE-A_pr_201203_201205.dat',obs7)

***************************
'q time'
data = subwrd(result,60)
say data

resd = write('/vol3/nice/obs/data.dat',data)
*****************************

 
 tt=tt+1; endwhile
