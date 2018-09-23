#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of seasonal precipitation'


'reinit'
'sdfopen /vol3/disco1/nice/results/papers/regcm_exp/correl_amz_neb_regcm_exp1_cmap_2005.nc'
'set display color white'
'set gxout shaded'
'c'

'color -1 1 -kind red->white->royalblue'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'd pr'
*'xcbar -line on -edge triangle'

'draw title a) Indice de Correlacao - Reg_EXP1/CMAP - 2005'
'draw xlab Longitude'

'printim /vol3/disco1/nice/results/papers/regcm_exp/correl_amz_neb_regcm_exp1_cmap_2005.png png white'

