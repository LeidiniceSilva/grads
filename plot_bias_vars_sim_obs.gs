#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of seasonal precipitation'


'reinit'
'sdfopen /vol3/disco1/nice/pre_amz_neb_exp2_cmap_obs_2004-2005_bias.nc'
'set display color white'
'set gxout shaded'
'c'

'color -10 10 -kind royalblue->white->red'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 3'
'd pr'
'xcbar -line on -edge triangle'

'draw title g) Vies - Reg_EXP2/CMAP - JJA 2005'
'draw xlab Longitude'

'printim /vol3/disco1/nice/vies_pre_amz_neb_regcm_exp2_cmap_JJA_2005.jpeg jpeg white'

