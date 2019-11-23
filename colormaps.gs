function colormaps(args)


demo=1
flipped='off'
levels='260 310 0.5'
cname='Dark'

*DEFAULT OPTIONS*

demo=0                        ;*Choose To plot Demo on Screen
flipped='off'                 ;*Flip Color Bar: e.g., white->black = black->white
levels='1 100 1'              ;*Levels to fix color scale to
cname='gs'                    ;*Name of Colorbar: Names are shown with demo, an additional list of names is found in the help section
custom=0
*********

****
check=1
a=1
while(check=1)
  line=subwrd(args,a)

  if(line='');break;endif

  if(line='-custom')
    custom=1
    levs=''
    while(quit)
      a=a+1
      if(subwrd(args,a)!='|' & subwrd(args,a)!='')
        levs=levs''subwrd(args,a)' '
        custom=custom+1
      else
        break
        quit=0
      endif
    endwhile
  endif
  if(line='-help')
    help()
    return
  endif

  if(line='-name' | line='-map')
    val=subwrd(args,a+1)
    if(valnum(val)!=0)
       say "Improper variably type for colormap name: defaulting to default scale: "cname
    else
       cname=val
    endif
  endif

  if(line='-demo' | line= 'demo')
    demo=1
  endif

  if(line='-levels' | line='-l')
    min=subwrd(args,a+1)
    max=subwrd(args,a+2)
    int=subwrd(args,a+3)
    val=min*max*int
    if(valnum(val)=0)
      say "Improper value for either Max, Min or Interval.  You must followed -levels with 3 numbers."
      say "Leaving levels as default "levels
    else
      levels=min' 'max' 'int
    endif
  endif

  if(line='flipped' | line='-flipped')
    flipped='on'
  endif

a=a+1
endwhile


if(demo=1)

  'clear'
  cnames='Paired Spectral Rainbow Jet Ocean Rain Satellite Autumn Cool Hot Dark Terrain1 Terrain2 ncl_topo Snow grayscale red green blue b2r brn2grn y2b oj2p olr Radar s3pcpn'
  draw=1
  maps=26
  m=1
  colors='1 120 1'
  bys='0.5 0.7'

  while(m<=maps)
   col=subwrd(cnames,m)
   ccols=set_color(colors,col,draw,bys,flipped,custom)

   ymid=(subwrd(bys,2)+subwrd(bys,1))/2
   'draw string 8.75 'ymid' 'col
   bys=subwrd(bys,1)+0.3' 'subwrd(bys,2)+0.3
   m=m+1
  endwhile


  say 'Your Available color scales are shown on the Screen'
  say 'press any key to clear the demo screen and continue...'
  pull dummy
*  'clear'
  draw=0
endif


  if(custom=0);levs=set_c_levs(levels);endif
  ccols=set_color(levels, cname,draw,'0.5 0.5',flipped,custom)
  'set clevs 'levs
  'set ccols 'ccols

  say "Your Colors have been set!"
  say "You are using the colormap: "cname
  say "Flip is set to: "flipped



function set_color(colors, col,draw,bys,flipped,custom)
  if(col='Paired' | col = 'paired')
    collevs=12
    col.1='162 204 225'
    col.2='36 123 178'
    col.3='174 221 136'
    col.4='54 162 47'
    col.5='250 152 151'
    col.6='229 39 40'
    col.7='253 186 102'
    col.8='254 127 1'
    col.9='195 170 210'
    col.10='108 64 153'
    col.11='253 250 150'
    col.12='179 93 42'

    if(flipped='on')
      col.12='162 204 225'
      col.11='36 123 178'
      col.10='174 221 136'
      col.9='54 162 47'
      col.8='250 152 151'
      col.7='229 39 40'
      col.6='253 186 102'
      col.5='254 127 1'
      col.4='195 170 210'
      col.3='108 64 153'
      col.2='253 250 150'
      col.1='179 93 42'
    endif

  endif


  if(col='Spectral' | col = 'spectral')
    collevs=9
    col.1='0 0 0'
    col.2='126 0 142'
    col.3='0 0 198'
    col.4='0 140 221'
    col.5='0 154 12'
    col.6='13 255 0'
    col.7='250 213 0'
    col.8='210 0 0'
    col.9='195 195 195'

    if(flipped='on')
      col.9='0 0 0'
      col.8='126 0 142'
      col.7='0 0 198'
      col.6='0 140 221'
      col.5='0 154 12'
      col.4='13 255 0'
      col.3='250 213 0'
      col.2='210 0 0'
      col.1='195 195 195' 
     endif

  endif


  if(col='hsv' | col = 'Rainbow' | col='rainbow')
    collevs=7
    col.1='255 0 0'
    col.2='255 255 0'
    col.3='0 255 0'
    col.4='0 255 255'
    col.5='0 0 255'
    col.6='255 0 255'
    col.7='255 0 0'

    if(flipped='on')
      col.7='255 0 0'
      col.6='255 255 0'
      col.5='0 255 0'
      col.4='0 255 255'
      col.3='0 0 255'
      col.2='255 0 255'
      col.1='255 0 0'
     endif
  endif


  if(col='b2r' | col = 'difference1')
    collevs=5
    col.1='0 0 100'
    col.2='0 0 255'
    col.3='255 255 255'
    col.4='255 0 0'
    col.5='100 0 0'

    if(flipped='on')
      col.5='0 0 100'
      col.4='0 0 255'
      col.3='255 255 255'
      col.2='255 0 0'
      col.1='100 0 0'
     endif
  endif


  if(col='brn2grn' | col = 'difference2')
    collevs=5
    col.1='85 49 5'
    col.2='224 196 130'
    col.3='255 255 255'
    col.4='126 203 192'
    col.5='0 62 50'

    if(flipped='on')
      col.5='85 49 5'
      col.4='224 196 130'
      col.3='255 255 255'
      col.2='126 203 192'
      col.1='0 62 50'
     endif
  endif


  if(col='y2b' | col = 'difference3')
    collevs=5
    col.1='249 208 2'
    col.2='252 232 131'
    col.3='255 255 255'
    col.4='145 163 253'
    col.5='10 50 250'

    if(flipped='on')
      col.5='249 208 2'
      col.4='252 232 131'
      col.3='255 255 255'
      col.2='145 163 253'
      col.1='10 50 250'
     endif
  endif

  if(col='oj2p' | col = 'difference4')
    collevs=5
    col.1='130 60 7'
    col.2='235 152 52'
    col.3='255 255 255'
    col.4='142 131 183'
    col.5='45 0 75'

    if(flipped='on')
      col.5='130 60 7'
      col.4='235 152 52'
      col.3='255 255 255'
      col.2='142 131 183'
      col.1='45 0 75'
     endif
  endif

  if(col='terrain1' | col = 'Terrain1' | col='t1' | col='T1')
    collevs=6
    col.1='48 56 158'
    col.2='0 152 254'
    col.3='5 205 103'
    col.4='249 253 151'
    col.5='129 93 88'
    col.6='255 255 255'
   
    if(flipped='on')
      col.6='48 56 158'
      col.5='0 152 254'
      col.4='5 205 103'
      col.3='249 253 151'
      col.2='129 93 88'
      col.1='255 255 255'
    endif
  endif

  
  if(col='OLR' | col = 'olr')
    collevs=13
    col.1='0 114 44'
    col.2='0 255 255'
    col.3='42 42 42'
    col.4='255 0 0'
    col.5='42 42 42'
    col.6='255 255 0'
    col.7='180 180 180'
    col.8='150 150 150'
    col.9='120 120 120'
    col.10='90 90 90'
    col.11='60 60 60'
    col.12='30 30 30'
    col.13='0 0 0'
   
    if(flipped='on')
    col.13='0 114 44'
    col.12='0 255 255'
    col.11='42 42 42'
    col.10='255 0 0'
    col.9='42 42 42'
    col.8='255 255 0'
    col.7='180 180 180'
    col.6='150 150 150'
    col.5='120 120 120'
    col.4='90 90 90'
    col.3='60 60 60'
    col.2='30 30 30'
    col.1='0 0 0'
    endif
  endif
  


  if(col='ocean' | col='Ocean')
    collevs=4
    col.1='0 125 0'
    col.2='0 8 79'
    col.3='41 148 184'
    col.4='255 255 255'

   
    if(flipped='on')
      col.4='0 125 0'
      col.3='0 126 169'
      col.2='41 148 184'
      col.1='255 255 255'
    endif
  endif


  if(col='grayscale' | col='gs' | col='Grayscale')
    collevs=2
    col.1='0 0 0'
    col.2='255 255 255'

   
    if(flipped='on')
      col.2='0 0 0'
      col.1='255 255 255'
    endif
  endif


  if(col='red' | col='r' | col='Red')
    collevs=2
    col.1='255 255 255'
    col.2='255 0 0'

   
    if(flipped='on')
      col.2='255 255 255'
      col.1='255 0 0'
    endif
  endif



  if(col='green' | col='g' | col='Green')
    collevs=2
    col.1='255 255 255'
    col.2='0 255 0'

   
    if(flipped='on')
      col.2='255 255 255'
      col.1='0 255 0'
    endif
  endif



  if(col='blue' | col='b' | col='Blue')
    collevs=2
    col.1='255 255 255'
    col.2='0 0 255'

   
    if(flipped='on')
      col.2='255 255 255'
      col.1='0 0 255'
    endif
  endif


  if(col='jet' | col='Jet')
    collevs=9
    col.1='0 0 133'
    col.2='0 0 255'
    col.3='0 94 255'
    col.4='0 209 255'
    col.5='31 255 215'
    col.6='114 255 132'
    col.7='255 255 0'
    col.8='255 0 0'
    col.9='150 0 0'
   
    if(flipped='on')
      col.9='0 0 133'
      col.8='0 0 255'
      col.7='0 94 255'
      col.6='0 209 255'
      col.5='31 255 215'
      col.4='114 255 132'
      col.3='255 255 0'
      col.2='255 0 0'
      col.1='150 0 0'
    endif
  endif


  if(col='T2' | col='t2' | col='Terrain2' | col ='terrain2')
    collevs=7
    col.1='0 87 0'
    col.2='57 152 6'
    col.3='180 183 42'
    col.4='174 169 114'
    col.5='126 151 155'
    col.6='221 221 221'
    col.7='255 255 255'
   
    if(flipped='on')
      col.7='0 87 0'
      col.6='57 152 6'
      col.5='180 183 42'
      col.4='174 169 114'
      col.3='126 151 155'
      col.2='221 221 221'
      col.1='255 255 255'
    endif
  endif


  if(col='Dark' | col='dark')
    collevs=8
    col.1='30 157 117'
    col.2='214 95 5'
    col.3='118 111 178'
    col.4='230 41 137'
    col.5='107 166 29'
    col.6='225 170 2'
    col.7='166 118 28'
    col.8='103 103 103'

   
    if(flipped='on')
    col.8='30 157 117'
    col.7='214 95 5'
    col.6='118 111 178'
    col.5='230 41 137'
    col.4='107 166 29'
    col.3='225 170 2'
    col.2='166 118 28'
    col.1='103 103 103'
    endif
  endif


  if(col='Radar' | col = 'radar')
    collevs=15
    col.1='4 233 231'
    col.2='1 159 244'
    col.3='3 0 244'
    col.4='2 253 2'
    col.5='1 197 1'
    col.6='0 142 0'
    col.7='253 248 2'
    col.8='229 188 0'
    col.9='253 149 0'
    col.10='253 0 0'
    col.11='212 0 0'
    col.12='188 0 0'
    col.13='248 0 253'
    col.14='152 84 198'
    col.15='255 255 255'

    if(flipped='on')
    col.15='4 233 231'
    col.14='1 159 244'
    col.13='3 0 244'
    col.12='2 253 2'
    col.11='1 197 1'
    col.10='0 142 0'
    col.9='253 248 2'
    col.8='229 188 0'
    col.7='253 149 0'
    col.6='253 0 0'
    col.5='212 0 0'
    col.4='188 0 0'
    col.3='248 0 253'
    col.2='152 84 198'
    col.1='255 255 255'
    endif

  endif



  if(col='Snow' | col='snow')
    collevs=5
    col.1='90 90 90'
    col.2='72 146 194'
    col.3='0 255 255'
    col.4='100 0 255'
    col.5='255 0 255'


   
    if(flipped='on')
    col.5='90 90 90'
    col.4='72 146 194'
    col.3='0 255 255'
    col.2='100 0 255'
    col.1='255 0 255'
    endif
  endif


  if(col='Satellite' | col='satellite' | col='Sat' | col='sat')
    collevs=5
    col.1='0 0 0'
    col.2='255 0 0 '
    col.3='255 255 0'
    col.4='0 0 255'
    col.5='255 255 255'

    if(flipped='on')
      col.5='0 0 0'
      col.4='255 0 0 '
      col.3='255 255 0'
      col.2='0 0 255'
      col.1='255 255 255'
    endif
  endif

  if(col='Rain' | col='rain')
    collevs=5
    col.1='0 255 0'
    col.2='255 255 0 '
    col.3='255 0 0'
    col.4='120 0 255'
    col.5='0 168 255'

    if(flipped='on')
      col.5='0 255 0'
      col.4='255 255 0 '
      col.3='255 0 0'
      col.2='120 0 255'
      col.1='0 168 255'
    endif
  endif

  if(col='Autumn' | col='autumn')
    collevs=5
    col.1='0 0 0'
    col.2='155 27 0 '
    col.3='255 127 0'
    col.4='255 255 132'
    col.5='255 255 255'

    if(flipped='on')
      col.5='0 0 0'
      col.4='155 27 0 '
      col.3='255 127 0'
      col.2='255 255 132'
      col.1='255 255 255'
    endif
  endif


  if(col='cool' | col='Cool')
    collevs=4
      col.1='0 255 255'
      col.2='84 171 255 '
      col.3='188 67 255'
      col.4='255 0 255'
    if(flipped='on')
      col.4='0 255 255'
      col.3='84 171 255 '
      col.2='188 67 255'
      col.1='255 0 255'
    endif
  endif

*** NEW MAPS ###


  if(col='hot' | col='Hot')
    collevs=4
      col.1='0 0 0'
      col.2='255 0 0'
      col.3='255 255 0'
      col.4='255 255 255'
    if(flipped='on')
      col.4='0 0 0'
      col.3='255 0 0'
      col.2='255 255 0'
      col.1='255 255 255'
    endif
  endif
  
  
  if(col='ncl_topo' | col='OceanLakeLandSnow' | col='OLLS')
    ctop=1
    collevs=6
      col.1='41 105 41'
      col.2='156 206 54'
      col.3='250 244 199'
      col.4='203 153 29'
      col.5='85 56 28'
      col.6='255 255 255'
    if(flipped='on')
      col.6='41 105 41'
      col.5='156 206 54'
      col.4='250 244 199'
      col.3='203 153 29'
      col.2='85 56 28'
      col.1='255 255 255'
    endif
  endif



  if(col='s3pcpn' | col='pcp')
    collevs=19
      col.1='255 255 255'
      col.2='0 250 233'
      col.3='0 213 83'
      col.4='0 213 83'
      col.5='173 235 0'
      col.6='248 253 0'
      col.7='255 104 0'
      col.8='255 8 30'
      col.9='249 45 98'
      col.10='191 50 255'
      col.11='95 48 255'
      col.12='49 49 195'
      col.13='32 32 83'
      col.14='77 77 77'
      col.15='173 173 173'
      col.16='231 218 206'
      col.17='228 189 154'
      col.18='189 136 90'
      col.19='130 79 29' 
    if(flipped='on')
      col.19='255 255 255'
      col.18='0 250 233'
      col.17='0 213 83'
      col.16='0 213 83'
      col.15='173 235 0'
      col.14='248 253 0'
      col.13='255 104 0'
      col.12='255 8 30'
      col.11='249 45 98'
      col.10='191 50 255'
      col.9='95 48 255'
      col.8='49 49 195'
      col.7='32 32 83'
      col.6='77 77 77'
      col.5='173 173 173'
      col.4='231 218 206'
      col.3='228 189 154'
      col.2='189 136 90'
      col.1='130 79 29'
    endif
  endif
 
  if(custom=0)
    colsteps=(subwrd(colors,2)-subwrd(colors,1))/subwrd(colors,3)
  else
    colsteps=custom
  endif
  colints=colsteps/(collevs-1)

  j=2
  c=1
  ccols=''
  bxs='0.5 8.0'
  bxint=(subwrd(bxs,2)-subwrd(bxs,1))/colsteps

  xloc=subwrd(bxs,1)

  while(j <= collevs)
    i=j-1
    redint=(subwrd(col.j,1)-subwrd(col.i,1))/colints
    redint=math_nint(redint)
    greenint=(subwrd(col.j,2)-subwrd(col.i,2))/colints
    greenint=math_nint(greenint)
    blueint=(subwrd(col.j,3)-subwrd(col.i,3))/colints
    blueint=math_nint(blueint)
    
    x=1
    if(math_int(colints)=math_nint(colints));add=1;else;add=1;endif
    while(x<=math_int(colints)+add)
      if(x=1)
        red=subwrd(col.i,1);green=subwrd(col.i,2);blue=subwrd(col.i,3)
      else
        red=red+redint;green=green+greenint;blue=blue+blueint
      endif
      if(red<0);red=0;endif
      if(green<0);green=0;endif
      if(blue<0);blue=0;endif

      if(red>255);red=255;endif
      if(green>255);green=255;endif
      if(blue>255);blue=255;endif
      'set rgb 'c+15' 'red' 'green' 'blue
      if(x=1 & j=2 & ctop=1);* Special Case for ncl_topo Only!
       'set rgb 'c+15' 36 125 209'
      endif
      if(draw =1)
        'set line 'c+15
        'draw recf 'xloc' 'subwrd(bys,1)' 'xloc+bxint' 'subwrd(bys,2)
      endif
      xloc=xloc+bxint
      x=x+1
      ccols=ccols' 'c+15
      c=c+1
    endwhile


    j=j+1
  endwhile
**  say colints' 'colsteps' 'c' 'colints*collevs
  return ccols
*****


function set_c_levs(levs)

min=subwrd(levs,1)
max=subwrd(levs,2)
int=subwrd(levs,3)

    value = min
    c_levs = ''

    while( value <= max )
      c_levs = c_levs ' ' value
      value = value + int
    endwhile
say c_levs
return c_levs


function set_c_cols(levs)

min=subwrd(levs,1)
max=subwrd(levs,2)
int=subwrd(levs,3)

    value = min
    c_levs = ''
    color=16
    while( value <= max )
      c_levs = c_levs ' ' color
      color = color+1
      value=value+int
    endwhile

say c_levs
return c_levs





function help()
  say '---------------------------------------------------'
  say '|                                                 |'
  say '|                 colormaps.gs v2.0               |'
  say '|                 December 2015                   |'
  say '---------------------------------------------------'
  say 'UPDATES:'
  say '1. New Maps Added:'
  say '   -Hot (based on MPL)'
  say '   -ncl_topo (based on the NCL OceanLakeLandSnow colortable)'
  say '   -OLR'
  say '   -Radar (standard weather radar scale)'
  say '   -s3pcpn (precipitation scale'
  say '2. Bug fix involving rounding issues in setting the color scales'
  say '3. Option for custom user levels instead of linear interpolation (see below for help on usage)'
  
  say 'Usage:'
  say 'Sets advanced and elegant colormaps to user prescribed scales with little effort.'
  say 'Includes a wide range of scales, including grayscale, and difference color maps.'
  say ''
  say 'Required: none, will use default values'
  say ''
  say 'Example: "colormaps -demo"'
  say 'Draws Demo screen with all color maps'
  say '---------------------------------------------------'
  say ''
  say 'Optional: -help         - Pulls up this Help Page'
  say ''
  say '          BASIC OPTIONS:'
  say '          -demo         - Pulls up Demo page'
  say '          -flipped      - Reverses direction of color scale'
  say '          -name/map     - chooses colormap'
  say '          -levels/l     - sets scale: max min int'
  say '          -custom       - inializes custom user levels'
  say ''
  say '          INCLUDED COLOR MAPS'
  say '          QUALITATIVE MAPS:'
  say '          -----------------'
  say '            Paired/paired'
  say '            Spectral/spectral'
  say '            Rainbow/rainbow/hsv'
  say '            Jet/jet'
  say '            Ocean/ocean'
  say '            Rain/rain'
  say '            Satellite/satellite/Sat/sat'
  say '            Autumn/autumn'
  say '            Cool/cool'
  say '            Dark/dark'
  say '            Terrain1/terrain1/T1/t1'
  say '            Terrain2/terrain2/T2/t2'
  say '            Snow/snow'
  say ''
  say '         MONOCHROMATIC MAPS:'
  say '         -------------------'
  say '            Grayscale/grayscale/gs'
  say '            Red/red/r' 
  say '            Green/green/g'
  say '            Blue/blue/b'
  say ''
  say '         DIFFERENCE MAPS:'
  say '         ----------------'
  say '            b2r/difference1'
  say '            brn2grn/difference2'
  say '            y2b/difference3'
  say '            oj2p/difference4'
  say ''
  say ''
  say '---------------------------------------------------'
  say ''
  say 'Example: colormaps -map Terrain1 -levels 0 3500 50'

  say 'This call will use the "Terrain1" colormap to set the colorscale to range from 0 to 3000 '
  say 'at intervals of 50.'
  say ''
  say ''
  say 'Example: Custom user levels!'
  say 'colormaps -map s3pcpn -custom 0 1 2 3 4 5 7.5 10 12.5 15 20 25 30 35 40 45 50 60 70 80 90 100'
  say 'NOTE: If you call any thing after the -custom call, you must place a | between your final level and the next call, example:'
  say 'colormaps -map s3pcpn -custom 0 1 2 3 4 5 7.5 10 12.5 15 20 25 30 35 40 45 50 60 70 80 90 100 | -flipped'
  say ''
  say ''
  
cnames='Paired Spectral Rainbow Jet Ocean Rain Satellite Autumn Cool Dark Terrain1 Terrain2 Snow grayscale red green blue b2r brn2grn y2b oj2p'
  say 'GENERAL NOTES:'
  say ''
  say 'Version 1.0: Orginially Developed by GrADS-Aholic: May 2014'
  say 'Version 2.0: Developed by GrADS-Aholic: December 2015'
  say ''
  say 'All Colorscales are approximated to the best of my ability and may not be perfect'
  say 'Check back in the future for updates to this script including new colorscales.'
  say 'Please report any bugs to http://gradsaddict.blogspot.com/'
  return



****
