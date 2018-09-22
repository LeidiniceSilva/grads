'reinit'; 'set display color white'; 'c'

*#########abre o arquivo ###########'

'sdfopen /vol3/dados_trmm_prp/AS.3B42_daily.2012.nc'


*'set lat -14 -4'; 'set lon -40 -33'
'set mpdset brmap_hires'; 'set map 15 1 3'
'set grid off'
'set ylopts 1 6 .1'
'set gxout contour'; 'set cmin 10000000000'
'set xlopts 1 5 .1'; 'set xlint 5'
'set ylopts 1 5 .1';  'set ylint 2'; 'set grads off'
*'d xlon'
'd r'

********plota a caixa NORDESTE **********

* area NW
 x1=-47.01; x2=-41.07; y1=-7.09; y2=-2.03;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
 

# area NS
 x3=-40.41; x4=-36.01; y3=-7.09; y4=-2.91;
'q ll2xy 'x3' 'y3''; pp1=sublin(result,1); 
'q ll2xy 'x4' 'y4''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2' '

# area SS
 x5=-46.57; x6=-39.97; y5=-13.91; y6=-7.09;
'q ll2xy 'x5' 'y5''; pp1=sublin(result,1); 
'q ll2xy 'x6' 'y6''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''

# area SS1
 x7=-39.97; x8=-37.55; y7=-11.05; y8=-7.09;
'q ll2xy 'x7' 'y7''; pp1=sublin(result,1); 
'q ll2xy 'x8' 'y8''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''

# area NC
 x9=-36.01; x10=-34.47; y9=-11.05; y10=-4.89;
'q ll2xy 'x9' 'y9''; pp1=sublin(result,1); 
'q ll2xy 'x10' 'y10''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''

# area SC
 x11=-39.97; x12=-37.99; y11=-18.09; y12=-11.93;
'q ll2xy 'x11' 'y11''; pp1=sublin(result,1); 
'q ll2xy 'x12' 'y12''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''

********plota a caixa  AMAZONIA **********

* area NW_A
 x13=-70; x14=-60; y13=-4; y14=2;
'q ll2xy 'x13' 'y13''; pp1=sublin(result,1); 
'q ll2xy 'x14' 'y14''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''
'draw string -47 -7 'NW'' 

# area NE_A
 x15=-59.6; x16=-48; y15=-4; y16=2;
'q ll2xy 'x15' 'y15''; pp1=sublin(result,1); 
'q ll2xy 'x16' 'y16''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2' '

# area SUL_A
 x17=-73; x18=-47; y17=-11; y18=-4.6;
'q ll2xy 'x17' 'y17''; pp1=sublin(result,1); 
'q ll2xy 'x18' 'y18''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''

# area Sul_A1
 x19=-60; x20=-51; y19=-18; y20=-11;
'q ll2xy 'x19' 'y19''; pp1=sublin(result,1); 
'q ll2xy 'x20' 'y20''; pp2=sublin(result,1); 
'set line 2'; 'draw rec 'pp1' 'pp2''


*************** extrair serie temporal********************
*
'set x 1'
'set y 1'

* VC COLOCA AS COORDENADAS DA ÁREA QUE VC
* DESEJA, VERIFIQUE SE OS DADOS VARIAM DE 180 A 180
* OU DE 0 A 360

# area NS
'set t 1 367'
'chuvaNW=aave(r,lon='x1',lon='x2',lat='y1',lat='y2')'

'chuvaNS=aave(r,lon='x3',lon='x4',lat='y3',lat='y4')'

'chuvaSS=aave(r,lon='x5',lon='x6',lat='y5',lat='y6')'

'chuvaSS1=aave(r,lon='x7',lon='x8',lat='y7',lat='y8')'

'chuvaNC=aave(r,lon='x9',lon='x10',lat='y9',lat='y10')'

'chuvaSC=aave(r,lon='x11',lon='x12',lat='y11',lat='y12')'

'chuvaNW_A=aave(r,lon='x13',lon='x14',lat='y13',lat='y14')'

'chuvaNE_A=aave(r,lon='x15',lon='x16',lat='y15',lat='y16')'

'chuvaSUL_A=aave(r,lon='x17',lon='x18',lat='y17',lat='y18')'

'chuvaSUL_A1=aave(r,lon='x19',lon='x20',lat='y19',lat='y20')'

* COLOQUE O TEMPO FINAL

tt=61; while(tt<=152); 
'set t 'tt''

**************** LEIA-ME **************************
* 
* O nome do arquivo segue o padrao: 
* ALUNO_EXPERIMENTO_AREA_VAR_INICIO_FINAL.dat
* depois olhar no arquivo Experimentos_tabela_all.odt
* AREA: PRISCILA (NW, NS, SS, NS, SS1/SS) NODESTE
* AREA: ELIANE (NW_A, NE_A, SUL_A, SUL_A1) AMAZONIA
*
*******************************************************

'd chuvaNW'

obs = subwrd(result,4)
say obs

res = write('/vol3/ANACLEIDE/MAM2012/trmm_NW_pr_201203_201205.dat',obs)

***************************

'd chuvaNS'

obs1 = subwrd(result,4)
say obs1

res1 = write('/vol3/ANACLEIDE/MAM2012/trmm_NS_pr_201203_201205.dat',obs1)

***************************

'd chuvaSS'

obs2 = subwrd(result,4)
say obs2

res2 = write('/vol3/ANACLEIDE/MAM2012/trmm_SS_pr_201203_201205.dat',obs2)

***************************

'd chuvaSS1'

obs3 = subwrd(result,4)
say obs3

res3 = write('/vol3/ANACLEIDE/MAM2012/trmm_SS1_pr_201203_201205.dat',obs3)

***************************
'd chuvaNC'

obs4 = subwrd(result,4)
say obs4

res4 = write('/vol3/ANACLEIDE/MAM2012/trmm_NC_pr_201203_201205.dat',obs4)

***************************
'd chuvaSC'

obs5 = subwrd(result,4)
say obs5

res5 = write('/vol3/ANACLEIDE/MAM2012/trmm_SC_pr_201203_201205.dat',obs5)

***************************

'd chuvaNW_A'

obs6 = subwrd(result,4)
say obs6

res6 = write('/vol3/ANACLEIDE/MAM2012/trmm_NW-A_pr_201203_201205.dat',obs6)


***************************

'd chuvaNE_A'

obs7 = subwrd(result,4)
say obs7

res7 = write('/vol3/ANACLEIDE/MAM2012/trmm_NE-A_pr_201203_201205.dat',obs7)

***************************

'd chuvaSUL_A'

obs8 = subwrd(result,4)
say obs8

res8 = write('/vol3/ANACLEIDE/MAM2012/trmm_SUL-A_pr_201203_201205.dat',obs8)

***************************

'd chuvaSUL_A1'

obs9 = subwrd(result,4)
say obs9

res9 = write('/vol3/ANACLEIDE/MAM2012/trmm_SUL-A1_pr_201203_201205.dat',obs9)

****************************

'q time'
data = subwrd(result,3)
say data

resd = write('/vol3/ANACLEIDE/MAM2012/datatrmm.dat',data)
*****************************

 
 tt=tt+1; endwhile
