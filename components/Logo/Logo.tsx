import * as React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { SvgProps, Defs, ClipPath, Path, Mask, G } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import { memo } from "react";
const Logo = (props: SvgProps) => (
  <View style={{flex: 1, padding: 16, margin: 16}}>
    <Svg
      width={256}
      height={256}
      viewBox="0 0 375 375"
      {...props}
    >
      <Defs>
        <ClipPath id="b">
          <Path d="M92.875 70.758h196.512v190.555H92.875Zm0 0" />
        </ClipPath>
        <ClipPath id="c">
          <Path d="M191.086 70.758c-54.238 0-98.211 42.656-98.211 95.277s43.973 95.278 98.21 95.278c54.24 0 98.208-42.657 98.208-95.278 0-52.62-43.969-95.277-98.207-95.277Zm0 0" />
        </ClipPath>
        <ClipPath id="d">
          <Path d="M211 130h13v8h-13Zm0 0" />
        </ClipPath>
        <ClipPath id="e">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="f">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="g">
          <Path d="M170 135h8v7h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="h">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="i">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="j">
          <Path d="M145 136h13v8h-13Zm0 0" />
        </ClipPath>
        <ClipPath id="k">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="l">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="m">
          <Path d="M125 129h132v71H125Zm0 0" />
        </ClipPath>
        <ClipPath id="n">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="o">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="p">
          <Path d="M186 140h70v60h-70Zm0 0" />
        </ClipPath>
        <ClipPath id="q">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="r">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="u">
          <Path d="M1 1h68v58.68H1Zm0 0" />
        </ClipPath>
        <ClipPath id="v">
          <Path d="M-67.992-59.75 57.19-74.059 70.816 45.168-54.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="w">
          <Path d="M56.816-78.691-68.37-64.383l16.523 144.559L73.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="t">
          <Path d="M0 0h70v60H0z" />
        </ClipPath>
        <ClipPath id="x">
          <Path d="M126 148h62v50h-62Zm0 0" />
        </ClipPath>
        <ClipPath id="y">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="z">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="A">
          <Path d="M126 149h62v49h-62Zm0 0" />
        </ClipPath>
        <ClipPath id="B">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="C">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="F">
          <Path d="M.238 1H61v47H.238Zm0 0" />
        </ClipPath>
        <ClipPath id="G">
          <Path d="M-7.992-68.75 117.19-83.059l13.625 119.227L5.633 50.473Zm0 0" />
        </ClipPath>
        <ClipPath id="H">
          <Path d="M116.816-87.691-8.37-73.383 8.152 71.176l125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="E">
          <Path d="M0 0h62v49H0z" />
        </ClipPath>
        <ClipPath id="I">
          <Path d="M207 138h8v5h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="J">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="K">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="L">
          <Path d="M199 139h8v5h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="M">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="N">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="O">
          <Path d="M191 140h8v4h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="P">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="Q">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="R">
          <Path d="M183 141h8v4h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="S">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="T">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="U">
          <Path d="M149 74h10v65h-10Zm0 0" />
        </ClipPath>
        <ClipPath id="V">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="W">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="X">
          <Path d="M187 140h67v60h-67Zm0 0" />
        </ClipPath>
        <ClipPath id="Y">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="Z">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="ac">
          <Path d="M57 1h9.68v58.68H57Zm0 0" />
        </ClipPath>
        <ClipPath id="ad">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="ae">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="af">
          <Path d="M54 1h9v58.68h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="ag">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="ah">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="ai">
          <Path d="M50 1h10v58.68H50Zm0 0" />
        </ClipPath>
        <ClipPath id="aj">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="ak">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="al">
          <Path d="M47 2h9v57.68h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="am">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="an">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="ao">
          <Path d="M43 2h10v57.68H43Zm0 0" />
        </ClipPath>
        <ClipPath id="ap">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aq">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="ar">
          <Path d="M40 3h9v56.68h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="as">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="at">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="au">
          <Path d="M36 3h10v56.68H36Zm0 0" />
        </ClipPath>
        <ClipPath id="av">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aw">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="ax">
          <Path d="M33 3h9v56.68h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="ay">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="az">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aA">
          <Path d="M29 4h10v55.68H29Zm0 0" />
        </ClipPath>
        <ClipPath id="aB">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aC">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aD">
          <Path d="M26 4h9v55.68h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="aE">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aF">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aG">
          <Path d="M22 5h10v54.68H22Zm0 0" />
        </ClipPath>
        <ClipPath id="aH">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aI">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aJ">
          <Path d="M19 5h9v54.68h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="aK">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aL">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aM">
          <Path d="M15 5h9v54.68h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="aN">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aO">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aP">
          <Path d="M12 6h9v53.68h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="aQ">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aR">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aS">
          <Path d="M8 6h9v53.68H8Zm0 0" />
        </ClipPath>
        <ClipPath id="aT">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aU">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aV">
          <Path d="M4 7h10v52.68H4Zm0 0" />
        </ClipPath>
        <ClipPath id="aW">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="aX">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="aY">
          <Path d="M1 7h9v52.68H1Zm0 0" />
        </ClipPath>
        <ClipPath id="aZ">
          <Path d="M-68.992-59.75 56.19-74.059 69.816 45.168-55.367 59.473Zm0 0" />
        </ClipPath>
        <ClipPath id="ba">
          <Path d="M55.816-78.691-69.37-64.383l16.523 144.559L72.336 65.867Zm0 0" />
        </ClipPath>
        <ClipPath id="ab">
          <Path d="M0 0h67v60H0z" />
        </ClipPath>
        <ClipPath id="bb">
          <Path d="M138 154h37v37h-37Zm0 0" />
        </ClipPath>
        <ClipPath id="bc">
          <Path d="M118.008 80.25 243.19 65.941l13.625 119.227-125.183 14.305Zm0 0" />
        </ClipPath>
        <ClipPath id="bd">
          <Path d="M242.816 61.309 117.63 75.617l16.523 144.559 125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="bg">
          <Path d="M2 2h33v33H2Zm0 0" />
        </ClipPath>
        <ClipPath id="bh">
          <Path d="M-19.992-73.75 105.19-88.059l13.625 119.227L-6.367 45.473Zm0 0" />
        </ClipPath>
        <ClipPath id="bi">
          <Path d="M104.816-92.691-20.37-78.383-3.848 66.176l125.184-14.309Zm0 0" />
        </ClipPath>
        <ClipPath id="bf">
          <Path d="M0 0h37v37H0z" />
        </ClipPath>
        <ClipPath id="bj">
          <Path d="M209 131h13v7h-13Zm0 0" />
        </ClipPath>
        <ClipPath id="bk">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bl">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bm">
          <Path d="M169 136h8v7h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="bn">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bo">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bp">
          <Path d="M144 137h13v7h-13Zm0 0" />
        </ClipPath>
        <ClipPath id="bq">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="br">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bs">
          <Path d="M125 130h130v72H125Zm0 0" />
        </ClipPath>
        <ClipPath id="bt">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bu">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bv">
          <Path d="M185 141h68v61h-68Zm0 0" />
        </ClipPath>
        <ClipPath id="bw">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bx">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bA">
          <Path d="M.04 1H67v59.121H.04Zm0 0" />
        </ClipPath>
        <ClipPath id="bB">
          <Path d="M-66.992-56.93 55.957-70.98 69.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bC">
          <Path d="m55.313-77.43-122.95 14.051L-51.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bz">
          <Path d="M0 0h68v61H0z" />
        </ClipPath>
        <ClipPath id="bD">
          <Path d="M126 149h61v49h-61Zm0 0" />
        </ClipPath>
        <ClipPath id="bE">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bF">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bG">
          <Path d="M125 149h61v48h-61Zm0 0" />
        </ClipPath>
        <ClipPath id="bH">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bI">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bL">
          <Path d="M1 1h60v46.8H1Zm0 0" />
        </ClipPath>
        <ClipPath id="bM">
          <Path d="m-6.992-64.93 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bN">
          <Path d="M115.313-85.43-7.638-71.379 8.63 70.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bK">
          <Path d="M0 0h61v48H0z" />
        </ClipPath>
        <ClipPath id="bO">
          <Path d="M205 139h8v4h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="bP">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bQ">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bR">
          <Path d="M197 140h8v4h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="bS">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bT">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bU">
          <Path d="M189 141h8v4h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="bV">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bW">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bX">
          <Path d="M182 142h8v4h-8Zm0 0" />
        </ClipPath>
        <ClipPath id="bY">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="bZ">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="ca">
          <Path d="M148 76h10v63h-10Zm0 0" />
        </ClipPath>
        <ClipPath id="cb">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cc">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cd">
          <Path d="M186 141h66v61h-66Zm0 0" />
        </ClipPath>
        <ClipPath id="ce">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cf">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="ci">
          <Path d="M56 1h9v59.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cj">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="ck">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cl">
          <Path d="M52 1h10v59.121H52Zm0 0" />
        </ClipPath>
        <ClipPath id="cm">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cn">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="co">
          <Path d="M49 1h9v59.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cp">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cq">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cr">
          <Path d="M45 2h10v58.121H45Zm0 0" />
        </ClipPath>
        <ClipPath id="cs">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="ct">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cu">
          <Path d="M42 2h9v58.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cv">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cw">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cx">
          <Path d="M39 2h9v58.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cy">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cz">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cA">
          <Path d="M35 3h9v57.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cB">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cC">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cD">
          <Path d="M32 3h9v57.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cE">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cF">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cG">
          <Path d="M28 4h9v56.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cH">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cI">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cJ">
          <Path d="M25 4h9v56.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cK">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cL">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cM">
          <Path d="M21 4h10v56.121H21Zm0 0" />
        </ClipPath>
        <ClipPath id="cN">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cO">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cP">
          <Path d="M18 5h9v55.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cQ">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cR">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cS">
          <Path d="M14 5h10v55.121H14Zm0 0" />
        </ClipPath>
        <ClipPath id="cT">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cU">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cV">
          <Path d="M11 6h9v54.121h-9Zm0 0" />
        </ClipPath>
        <ClipPath id="cW">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cX">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="cY">
          <Path d="M7 6h10v54.121H7Zm0 0" />
        </ClipPath>
        <ClipPath id="cZ">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="da">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="db">
          <Path d="M4 6h9v54.121H4Zm0 0" />
        </ClipPath>
        <ClipPath id="dc">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="dd">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="de">
          <Path d="M.48 7H10v53.121H.48Zm0 0" />
        </ClipPath>
        <ClipPath id="df">
          <Path d="M-67.992-56.93 54.957-70.98 68.328 46.008l-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="dg">
          <Path d="m54.313-77.43-122.95 14.051L-52.37 78.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="ch">
          <Path d="M0 0h66v61H0z" />
        </ClipPath>
        <ClipPath id="dh">
          <Path d="M138 155h36v36h-36Zm0 0" />
        </ClipPath>
        <ClipPath id="di">
          <Path d="m118.008 84.07 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="dj">
          <Path d="m240.313 63.57-122.95 14.051 16.266 142.324 122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="dm">
          <Path d="M2 2h32v32H2Zm0 0" />
        </ClipPath>
        <ClipPath id="dn">
          <Path d="m-19.992-70.93 122.949-14.05 13.371 116.988-122.95 14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="do">
          <Path d="m102.313-91.43-122.95 14.051L-4.37 64.945l122.95-14.05Zm0 0" />
        </ClipPath>
        <ClipPath id="dl">
          <Path d="M0 0h36v36H0z" />
        </ClipPath>
        <ClipPath id="dp">
          <Path d="M23.297 174.543H351.73v66.621H23.297Zm0 0" />
        </ClipPath>
        <ClipPath id="dq">
          <Path d="M187.5 174.543c-90.688 0-164.203 14.914-164.203 33.309 0 18.398 73.516 33.312 164.203 33.312 90.688 0 164.203-14.914 164.203-33.312 0-18.395-73.515-33.309-164.203-33.309Zm0 0" />
        </ClipPath>
        <ClipPath id="dr">
          <Path d="M54.316 177.645h266.25v45.414H54.316Zm0 0" />
        </ClipPath>
        <ClipPath id="ds">
          <Path d="M96 177.645h183V180H96Zm0 0" />
        </ClipPath>
        <ClipPath id="dt">
          <Path d="M96 177.645h183v2.062H96Zm0 0" />
        </ClipPath>
        <ClipPath id="du">
          <Path d="M156.168 137.957c-7.297 3.14-13.55 7.14-12.773 14.668-8.54 2.914-23.747 6.5-22.25 18.512.164 1.695 1.699 4.484 2.035 5.898-8.93.66-17.399 1.461-25.243 2.422a90.29 90.29 0 0 1-1.55-16.687c0-26.958 11.82-51.254 30.543-67.961l.02.023a.604.604 0 0 0 .034.625l15.875 22.922c-.132.207-.152.441-.039.605m17.66 17.586c-.511.094-.984.203-1.43.325l-13.796-19.606c-.117-.16-.352-.23-.578-.172l-15.863-22.93a.616.616 0 0 0-.575-.257l-.117-.168c15.16-13.067 34.645-21.242 55.973-22.035l-1.242 3.515a.617.617 0 0 0-.489.395l-10.715 30.418c-.246 0-.449.125-.515.316Zm53.61-33.87c-.082 0-2.004.382-2.09.382-.164 0-.89-.21-.988-.059-.227.34-.407 1.215-.649 1.465-.16.153.082.153-.406.153-.477 0-1.16.156-1.527 0-.567-.23-1.621-.903-3.078-.727-.247.027-.48-.164-.649-.25-.07 0-.48-.234-.48-.398 0-1.16 2.863-1.457 2.863-1.973-.727 0-3.027-.547-3.918-.547-.719 0-1.29 0-1.773-.234-.735-.325-2.184-1.055-3.153-1.055-1.222 0-3.238.242-4.207-.402 0-.649 2.828-1.301 3.477-1.383 2.508-.324 5.82-1.707 8.246-1.707 1.074 0 2.457.222 3.34.547 1 .37.941.879 1.703.636 2.082-.671 2.949-.332 2.777.77 1.664.21 4.04.492 5.234.738 3.637.746 2.793 3.336 4.848 5.399.324.332-2.629-.305-2.945-.305-1.055 0-2.914.164-3.719-.238-.25-.082-2.59-.813-2.906-.813Zm-26.598-31.04c50.192 0 91.117 40.926 91.117 91.11 0 5.437-.488 10.746-1.406 15.914-6.387-.664-13.254-1.246-20.457-1.754-.77-7.41-1.707-15.883-2.305-22.27-.445-4.754-4.515-10.27-9.222-11.074-18.93-3.223-42.524-3.336-61.055-1.133-.297.035-.601.063-.894.102a.313.313 0 0 0-.192-.078c-3.539-5.344-12.703-6.727-19.308-6.301l10.164-28.824c.07-.188-.02-.399-.2-.563l10.727-30.414a.592.592 0 0 0-.121-.613l1.437-4.082c.575-.012 1.145-.02 1.715-.02Zm0 0" />
        </ClipPath>
        <ClipPath id="dv">
          <Path d="M119.371 232.422H275.95v36.492H119.371Zm0 0" />
        </ClipPath>
        <ClipPath id="dw">
          <Path d="M191.086 83.734H218V103h-26.914Zm0 0" />
        </ClipPath>
        <ClipPath id="dx">
          <Path d="M215 94h16.586v7H215Zm0 0" />
        </ClipPath>
        <ClipPath id="dy">
          <Path d="M204 100h12v6.234h-12Zm0 0" />
        </ClipPath>
        <ClipPath id="dz">
          <Path d="M144 62h39v85h-39Zm0 0" />
        </ClipPath>
        <ClipPath id="dA">
          <Path d="m107.215 127.617 50.441-66.226 24.465 18.632-50.445 66.227Zm0 0" />
        </ClipPath>
        <ClipPath id="dB">
          <Path d="m93.875 145.133 63.621-83.531 94.27 71.804-63.625 83.528Zm0 0" />
        </ClipPath>
        <Mask id="s">
          <G filter="url(#a)">
            <Path fillOpacity={0.3} d="M-37.5-37.5h450v450h-450z" />
          </G>
        </Mask>
        <Mask id="D">
          <G filter="url(#a)">
            <Path fillOpacity={0.5} d="M-37.5-37.5h450v450h-450z" />
          </G>
        </Mask>
        <Mask id="aa">
          <G filter="url(#a)">
            <Path fillOpacity={0.3} d="M-37.5-37.5h450v450h-450z" />
          </G>
        </Mask>
        <Mask id="be">
          <G filter="url(#a)">
            <Path fillOpacity={0.5} d="M-37.5-37.5h450v450h-450z" />
          </G>
        </Mask>
        <Mask id="by">
          <G filter="url(#a)">
            <Path fillOpacity={0.3} d="M-37.5-37.5h450v450h-450z" />
          </G>
        </Mask>
        <Mask id="bJ">
          <G filter="url(#a)">
            <Path fillOpacity={0.5} d="M-37.5-37.5h450v450h-450z" />
          </G>
        </Mask>
        <Mask id="cg">
          <G filter="url(#a)">
            <Path fillOpacity={0.3} d="M-37.5-37.5h450v450h-450z" />
          </G>
        </Mask>
        <Mask id="dk">
          <G filter="url(#a)">
            <Path fillOpacity={0.5} d="M-37.5-37.5h450v450h-450z" />
          </G>
        </Mask>
      </Defs>
      <G clipPath="url(#b)">
        <G clipPath="url(#c)">
          <Path fill="#f1ac00" d="M92.875 70.758h196.512v190.555H92.875Zm0 0" />
        </G>
      </G>
      <G clipPath="url(#d)">
        <G clipPath="url(#e)">
          <G clipPath="url(#f)">
            <Path
              fill="#fff"
              d="M211.34 134.25c.027.223.09.441.195.648.102.211.242.41.418.598s.387.363.629.524c.242.156.516.3.816.425.301.125.622.23.97.317a9.474 9.474 0 0 0 2.254.254c.394 0 .792-.024 1.19-.07a11.61 11.61 0 0 0 1.18-.2c.39-.09.762-.195 1.121-.324.36-.129.7-.274 1.016-.434.32-.16.61-.336.875-.527.266-.188.496-.39.7-.602.198-.207.362-.425.495-.648.13-.223.219-.45.274-.676a1.978 1.978 0 0 0-.153-1.324 2.455 2.455 0 0 0-.418-.594 3.395 3.395 0 0 0-.632-.523c-.243-.16-.512-.301-.813-.426-.3-.125-.625-.23-.973-.316a8.371 8.371 0 0 0-1.086-.196 10.363 10.363 0 0 0-2.359.008 10.782 10.782 0 0 0-2.3.527 7.938 7.938 0 0 0-1.891.957c-.262.192-.496.391-.696.602-.203.21-.367.426-.496.652a2.364 2.364 0 0 0-.273.676c-.055.227-.067.45-.043.672Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#g)">
        <G clipPath="url(#h)">
          <G clipPath="url(#i)">
            <Path
              fill="#fff"
              d="M170.406 138.93c.055.449.192.87.418 1.265.23.395.528.735.895 1.012.37.281.781.48 1.234.606.453.12.918.156 1.387.101a3.71 3.71 0 0 0 1.328-.414c.414-.219.77-.508 1.062-.863.297-.356.512-.754.645-1.188.133-.437.172-.879.121-1.328a3.248 3.248 0 0 0-.418-1.27 3.404 3.404 0 0 0-.894-1.011 3.562 3.562 0 0 0-1.235-.602 3.666 3.666 0 0 0-1.383-.105 3.662 3.662 0 0 0-2.394 1.281c-.297.356-.512.75-.64 1.188a3.26 3.26 0 0 0-.126 1.328Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#j)">
        <G clipPath="url(#k)">
          <G clipPath="url(#l)">
            <Path
              fill="#fff"
              d="M145.7 140.535c.027.215.09.426.187.63.097.202.234.398.406.581.168.184.371.352.605.508.235.156.497.293.786.418.289.121.601.223.937.308.332.083.684.145 1.047.188.367.043.738.062 1.121.062a10.415 10.415 0 0 0 2.29-.261c.37-.086.73-.192 1.077-.313.344-.125.672-.265.977-.422a6.28 6.28 0 0 0 .844-.511c.253-.184.476-.38.671-.582a3.49 3.49 0 0 0 .477-.633c.125-.219.21-.438.262-.656a1.97 1.97 0 0 0 .039-.657 1.845 1.845 0 0 0-.188-.632 2.413 2.413 0 0 0-.402-.579 3.43 3.43 0 0 0-.606-.511 5.17 5.17 0 0 0-.789-.414 6.379 6.379 0 0 0-.933-.309 7.95 7.95 0 0 0-1.051-.191c-.363-.04-.738-.063-1.121-.063a10.78 10.78 0 0 0-2.285.262 9.1 9.1 0 0 0-1.078.316 7.952 7.952 0 0 0-.98.418c-.305.16-.587.328-.84.512-.255.187-.481.379-.673.586a3.2 3.2 0 0 0-.476.633 2.342 2.342 0 0 0-.266.656c-.05.219-.062.437-.039.656Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#m)">
        <G clipPath="url(#n)">
          <G clipPath="url(#o)">
            <Path
              fill="#fff"
              d="m125.883 149.371 7.36 64.39a6.53 6.53 0 0 0 7.23 5.747l112.367-12.84a6.53 6.53 0 0 0 5.746-7.23l-7.36-64.391A6.524 6.524 0 0 0 244 129.3l-112.371 12.844c-3.586.406-6.152 3.644-5.746 7.226Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#p)">
        <G clipPath="url(#q)">
          <G clipPath="url(#r)" mask="url(#s)">
            <G clipPath="url(#t)" transform="translate(186 140)">
              <G clipPath="url(#u)">
                <G clipPath="url(#v)">
                  <G clipPath="url(#w)">
                    <Path
                      fill="#fff"
                      d="m1.375 11.46 6.094 53.31a3.622 3.622 0 0 0 1.754 2.699 3.71 3.71 0 0 0 1.636.492c.196.008.399 0 .598-.023l53.621-6.126a3.73 3.73 0 0 0 .762-.175 3.603 3.603 0 0 0 1.472-.953 3.61 3.61 0 0 0 .938-2.864L62.156 4.516a3.623 3.623 0 0 0-1.558-2.579 3.637 3.637 0 0 0-2.43-.593L4.551 7.473c-.2.023-.399.062-.586.113-.57.168-1.074.46-1.485.848a3.616 3.616 0 0 0-1.105 3.027Zm0 0"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G clipPath="url(#x)">
        <G clipPath="url(#y)">
          <G clipPath="url(#z)">
            <Path
              fill="#fff"
              d="M126.504 154.793 131.44 198l51.98-5.941a5.085 5.085 0 0 0 4.474-5.63l-3.786-33.105a5.082 5.082 0 0 0-5.629-4.472Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#A)">
        <G clipPath="url(#B)">
          <G clipPath="url(#C)" mask="url(#D)">
            <G clipPath="url(#E)" transform="translate(126 149)">
              <G clipPath="url(#F)">
                <G clipPath="url(#G)">
                  <G clipPath="url(#H)">
                    <Path
                      fill="#fff"
                      d="M.625 6.86 5.32 47.93l50.73-5.801a5.078 5.078 0 0 0 4.473-5.625L56.984 5.539a5.08 5.08 0 0 0-5.629-4.473L.625 6.863Zm0 0"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G clipPath="url(#I)">
        <G clipPath="url(#J)">
          <G clipPath="url(#K)">
            <Path
              fill="#fff"
              d="m208.098 142.215 5.3-.606a.811.811 0 0 0 .711-.898l-.16-1.418a.817.817 0 0 0-.898-.715l-5.301.606a.814.814 0 0 0-.71.898l.16 1.418c.05.445.452.766.898.715Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#L)">
        <G clipPath="url(#M)">
          <G clipPath="url(#N)">
            <Path
              fill="#fff"
              d="m200.297 143.105 5.3-.605a.81.81 0 0 0 .712-.898l-.164-1.418a.808.808 0 0 0-.895-.711l-5.3.605a.808.808 0 0 0-.712.895l.16 1.422a.81.81 0 0 0 .899.71Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#O)">
        <G clipPath="url(#P)">
          <G clipPath="url(#Q)">
            <Path
              fill="#fff"
              d="m192.492 143.996 5.301-.605a.808.808 0 0 0 .71-.895l-.163-1.422a.808.808 0 0 0-.895-.71l-5.3.605a.81.81 0 0 0-.711.898l.16 1.418a.81.81 0 0 0 .898.711Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#R)">
        <G clipPath="url(#S)">
          <G clipPath="url(#T)">
            <Path
              fill="#fff"
              d="m184.688 144.89 5.3-.605a.811.811 0 0 0 .711-.898l-.164-1.418a.81.81 0 0 0-.894-.715l-5.301.605a.811.811 0 0 0-.711.899l.16 1.418c.05.445.453.765.899.715Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#U)">
        <G clipPath="url(#V)">
          <G clipPath="url(#W)">
            <Path
              fill="#fff"
              d="m149.773 137.855 7.215-63.75 1.469.145-4.969 63.871Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#X)">
        <G clipPath="url(#Y)">
          <G clipPath="url(#Z)" mask="url(#aa)">
            <G clipPath="url(#ab)" transform="translate(187 140)">
              <G clipPath="url(#ac)">
                <G clipPath="url(#ad)">
                  <G clipPath="url(#ae)">
                    <Path
                      fill="#fff"
                      d="m57.95 1.34 6.89 60.297a3.603 3.603 0 0 0 1.472-.953L59.599 1.938a3.592 3.592 0 0 0-1.649-.598Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#af)">
                <G clipPath="url(#ag)">
                  <G clipPath="url(#ah)">
                    <Path
                      fill="#fff"
                      d="m55.969 1.48-1.563.18 6.91 60.465 1.563-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#ai)">
                <G clipPath="url(#aj)">
                  <G clipPath="url(#ak)">
                    <Path
                      fill="#fff"
                      d="m52.43 1.887-1.559.175 6.91 60.47 1.559-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#al)">
                <G clipPath="url(#am)">
                  <G clipPath="url(#an)">
                    <Path
                      fill="#fff"
                      d="m48.895 2.29-1.563.179 6.91 60.465 1.563-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#ao)">
                <G clipPath="url(#ap)">
                  <G clipPath="url(#aq)">
                    <Path
                      fill="#fff"
                      d="m45.363 2.695-1.562.176 6.91 60.469 1.562-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#ar)">
                <G clipPath="url(#as)">
                  <G clipPath="url(#at)">
                    <Path
                      fill="#fff"
                      d="m41.832 3.098-1.562.18 6.91 60.464 1.562-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#au)">
                <G clipPath="url(#av)">
                  <G clipPath="url(#aw)">
                    <Path
                      fill="#fff"
                      d="m38.297 3.5-1.563.18 6.91 60.465 1.563-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#ax)">
                <G clipPath="url(#ay)">
                  <G clipPath="url(#az)">
                    <Path
                      fill="#fff"
                      d="m34.762 3.906-1.563.176 6.914 60.469 1.559-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aA)">
                <G clipPath="url(#aB)">
                  <G clipPath="url(#aC)">
                    <Path
                      fill="#fff"
                      d="m31.227 4.309-1.563.18 6.91 60.464 1.563-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aD)">
                <G clipPath="url(#aE)">
                  <G clipPath="url(#aF)">
                    <Path
                      fill="#fff"
                      d="m27.695 4.71-1.558.18 6.91 60.47 1.558-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aG)">
                <G clipPath="url(#aH)">
                  <G clipPath="url(#aI)">
                    <Path
                      fill="#fff"
                      d="m24.16 5.117-1.562.18 6.91 60.465 1.562-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aJ)">
                <G clipPath="url(#aK)">
                  <G clipPath="url(#aL)">
                    <Path
                      fill="#fff"
                      d="m20.625 5.52-1.559.18 6.91 60.464 1.563-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aM)">
                <G clipPath="url(#aN)">
                  <G clipPath="url(#aO)">
                    <Path
                      fill="#fff"
                      d="m17.09 5.926-1.563.176 6.91 60.468L24 66.39Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aP)">
                <G clipPath="url(#aQ)">
                  <G clipPath="url(#aR)">
                    <Path
                      fill="#fff"
                      d="M13.563 6.328 12 6.508l6.91 60.465 1.563-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aS)">
                <G clipPath="url(#aT)">
                  <G clipPath="url(#aU)">
                    <Path
                      fill="#fff"
                      d="m10.023 6.73-1.562.18 6.914 60.469 1.559-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aV)">
                <G clipPath="url(#aW)">
                  <G clipPath="url(#aX)">
                    <Path
                      fill="#fff"
                      d="m6.492 7.137-1.562.18 6.91 60.464 1.562-.18Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#aY)">
                <G clipPath="url(#aZ)">
                  <G clipPath="url(#ba)">
                    <Path
                      fill="#fff"
                      d="m1.48 8.434 6.747 59.03a3.71 3.71 0 0 0 1.636.493L2.965 7.586c-.57.168-1.074.46-1.485.848Zm0 0"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G clipPath="url(#bb)">
        <G clipPath="url(#bc)">
          <G clipPath="url(#bd)">
            <Path
              fill="#fff"
              d="M139.027 174.68a17.983 17.983 0 0 0 2.129 6.637c.285.511.594 1.007.926 1.492.332.48.688.945 1.066 1.39.375.446.778.871 1.196 1.281.422.407.86.793 1.316 1.157.461.363.934.703 1.426 1.023.492.317.996.61 1.52.875a17.203 17.203 0 0 0 3.253 1.29 17.18 17.18 0 0 0 3.446.628c.582.05 1.168.07 1.754.059a18.352 18.352 0 0 0 3.477-.395 18.06 18.06 0 0 0 1.694-.453c.56-.18 1.106-.383 1.641-.617.54-.23 1.063-.488 1.574-.774a18.196 18.196 0 0 0 2.88-1.992 17.695 17.695 0 0 0 2.438-2.516 17.474 17.474 0 0 0 1.901-2.94 18.262 18.262 0 0 0 1.29-3.255c.16-.562.292-1.132.398-1.707.105-.578.183-1.156.23-1.738.047-.582.066-1.168.059-1.754a17.543 17.543 0 0 0-.399-3.476 16.938 16.938 0 0 0-.453-1.696 16.245 16.245 0 0 0-.617-1.64c-.23-.54-.488-1.063-.774-1.575a17.144 17.144 0 0 0-.921-1.488c-.336-.48-.692-.945-1.067-1.39-.379-.45-.777-.876-1.2-1.282-.42-.406-.858-.793-1.315-1.156a16.638 16.638 0 0 0-1.426-1.023c-.492-.317-.996-.61-1.516-.88a18.336 18.336 0 0 0-3.258-1.288 18.327 18.327 0 0 0-1.707-.399 17.2 17.2 0 0 0-1.738-.23 18.708 18.708 0 0 0-1.75-.059c-.586.008-1.168.047-1.75.113-.582.067-1.16.16-1.73.286a18.047 18.047 0 0 0-3.336 1.066c-.536.234-1.059.492-1.57.777a17.21 17.21 0 0 0-2.884 1.989 17.69 17.69 0 0 0-2.437 2.515c-.363.457-.703.934-1.023 1.426-.317.488-.61.996-.875 1.516a17.65 17.65 0 0 0-1.29 3.258 16.926 16.926 0 0 0-.402 1.706c-.105.575-.18 1.153-.23 1.739a18.664 18.664 0 0 0-.059 1.75c.012.586.047 1.168.113 1.75Zm0 0"
            />
            <G mask="url(#be)">
              <G clipPath="url(#bf)" transform="translate(138 154)">
                <G clipPath="url(#bg)">
                  <G clipPath="url(#bh)">
                    <G clipPath="url(#bi)">
                      <Path
                        fill="#fff"
                        d="M3.082 20.445a15.716 15.716 0 0 0 3.64 8.418 15.729 15.729 0 0 0 7.707 4.977c.997.285 2.012.472 3.048.558 1.03.082 2.066.067 3.093-.05a15.763 15.763 0 0 0 3.032-.653 16.024 16.024 0 0 0 2.84-1.226 16.105 16.105 0 0 0 2.55-1.762 15.89 15.89 0 0 0 2.153-2.227 15.43 15.43 0 0 0 1.683-2.601c.473-.922.852-1.879 1.137-2.879a15.79 15.79 0 0 0-.14-9.172 15.64 15.64 0 0 0-1.231-2.84 15.68 15.68 0 0 0-1.762-2.55 15.896 15.896 0 0 0-2.223-2.157 15.985 15.985 0 0 0-2.601-1.68 15.888 15.888 0 0 0-2.88-1.14 15.897 15.897 0 0 0-6.144-.508c-1.03.117-2.039.336-3.027.652-.988.317-1.937.727-2.844 1.23a15.647 15.647 0 0 0-2.547 1.763 15.729 15.729 0 0 0-3.836 4.824A15.609 15.609 0 0 0 3.59 14.3c-.285 1-.473 2.015-.559 3.047a15.49 15.49 0 0 0 .051 3.097Zm0 0"
                      />
                    </G>
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G clipPath="url(#bj)">
        <G clipPath="url(#bk)">
          <G clipPath="url(#bl)">
            <Path
              fill="#a6a6a6"
              d="M209.414 135.18c.027.218.09.43.191.632.098.208.239.403.41.586.173.188.38.356.618.512.238.16.508.297.8.422.297.121.614.227.954.309.34.086.695.148 1.066.191a10.016 10.016 0 0 0 2.317-.008 10.585 10.585 0 0 0 2.257-.515 8.21 8.21 0 0 0 .996-.426c.313-.16.602-.332.86-.516.258-.187.488-.383.683-.59.2-.207.36-.422.489-.64.125-.219.215-.438.27-.66a1.917 1.917 0 0 0-.15-1.301 2.399 2.399 0 0 0-.413-.586 3.386 3.386 0 0 0-.617-.512 4.674 4.674 0 0 0-.801-.418 6.49 6.49 0 0 0-.953-.312 8.911 8.911 0 0 0-1.067-.188 9.948 9.948 0 0 0-1.14-.062c-.391 0-.782.023-1.176.07a10.35 10.35 0 0 0-2.258.512c-.352.129-.684.27-.996.425-.313.16-.598.333-.86.52a4.892 4.892 0 0 0-.683.59c-.2.207-.36.418-.488.637a2.435 2.435 0 0 0-.266.664 1.914 1.914 0 0 0-.043.664Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#bm)">
        <G clipPath="url(#bn)">
          <G clipPath="url(#bo)">
            <Path
              fill="#a6a6a6"
              d="M169.23 139.77c.051.44.188.855.41 1.246.223.386.516.718.88.992.363.273.765.472 1.21.594.446.117.899.152 1.36.101.46-.055.894-.191 1.305-.406a3.506 3.506 0 0 0 1.042-.852 3.259 3.259 0 0 0 .75-2.468 3.11 3.11 0 0 0-.41-1.247 3.32 3.32 0 0 0-.875-.992 3.54 3.54 0 0 0-1.21-.593 3.719 3.719 0 0 0-1.364-.102 3.572 3.572 0 0 0-2.348 1.258c-.289.347-.5.738-.628 1.164-.133.43-.172.863-.122 1.305Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#bp)">
        <G clipPath="url(#bq)">
          <G clipPath="url(#br)">
            <Path
              fill="#545454"
              d="M144.977 141.348c.023.21.085.418.183.617.098.2.23.39.395.57.168.18.367.348.597.5.23.153.489.29.77.41.285.118.594.22.918.301.328.082.672.145 1.031.188a10.189 10.189 0 0 0 2.23-.008c.38-.043.75-.106 1.118-.188a10.06 10.06 0 0 0 1.058-.308c.34-.121.66-.262.961-.414.301-.153.575-.32.825-.504.25-.18.468-.371.66-.57.191-.204.343-.41.468-.622a2.47 2.47 0 0 0 .258-.644c.051-.219.063-.434.04-.645a1.99 1.99 0 0 0-.184-.62c-.098-.2-.23-.391-.399-.571a3.277 3.277 0 0 0-.594-.496 4.515 4.515 0 0 0-.773-.41 6.168 6.168 0 0 0-.918-.305 7.714 7.714 0 0 0-1.027-.184 9.275 9.275 0 0 0-1.102-.062 10.068 10.068 0 0 0-3.304.566c-.34.121-.66.258-.961.41-.301.157-.579.325-.829.504-.25.18-.468.371-.656.575a3.09 3.09 0 0 0-.469.62c-.125.212-.21.426-.257.645a1.89 1.89 0 0 0-.04.645Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#bs)">
        <G clipPath="url(#bt)">
          <G clipPath="url(#bu)">
            <Path d="m125.523 150.023 7.223 63.211a6.408 6.408 0 0 0 7.098 5.641l110.312-12.605a6.408 6.408 0 0 0 5.64-7.098l-7.226-63.215a6.407 6.407 0 0 0-7.093-5.64L131.16 142.925a6.405 6.405 0 0 0-5.637 7.097Zm0 0" />
          </G>
        </G>
      </G>
      <G clipPath="url(#bv)">
        <G clipPath="url(#bw)">
          <G clipPath="url(#bx)" mask="url(#by)">
            <G clipPath="url(#bz)" transform="translate(185 141)">
              <G clipPath="url(#bA)">
                <G clipPath="url(#bB)">
                  <G clipPath="url(#bC)">
                    <Path
                      fill="#a6a6a6"
                      d="M.887 11.074 6.87 63.402a3.547 3.547 0 0 0 1.719 2.653c.48.277 1.027.449 1.61.484.19.008.39 0 .585-.023l52.64-6.016a3.515 3.515 0 0 0 2.191-1.105 3.54 3.54 0 0 0 .923-2.81L60.56 4.255a3.571 3.571 0 0 0-1.532-2.531 3.561 3.561 0 0 0-2.386-.582L4.004 7.156a3.93 3.93 0 0 0-.574.114 3.603 3.603 0 0 0-1.457.832 3.56 3.56 0 0 0-1.086 2.972Zm0 0"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G clipPath="url(#bD)">
        <G clipPath="url(#bE)">
          <G clipPath="url(#bF)">
            <Path
              fill="#545454"
              d="m126.129 155.344 4.848 42.418 51.027-5.832a4.995 4.995 0 0 0 4.394-5.528l-3.714-32.5a4.992 4.992 0 0 0-5.528-4.39Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#bG)">
        <G clipPath="url(#bH)">
          <G clipPath="url(#bI)" mask="url(#bJ)">
            <G clipPath="url(#bK)" transform="translate(125 149)">
              <G clipPath="url(#bL)">
                <G clipPath="url(#bM)">
                  <G clipPath="url(#bN)">
                    <Path
                      fill="#a6a6a6"
                      d="m1.25 7.39 4.61 40.317 49.8-5.691a4.989 4.989 0 0 0 4.39-5.524L56.579 6.094a4.989 4.989 0 0 0-5.523-4.39L1.25 7.393Zm0 0"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G clipPath="url(#bO)">
        <G clipPath="url(#bP)">
          <G clipPath="url(#bQ)">
            <Path
              fill="#545454"
              d="m206.23 142.996 5.204-.598a.792.792 0 0 0 .699-.878l-.16-1.395a.797.797 0 0 0-.88-.7l-5.202.598a.792.792 0 0 0-.7.88l.16 1.394a.795.795 0 0 0 .88.7Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#bR)">
        <G clipPath="url(#bS)">
          <G clipPath="url(#bT)">
            <Path
              fill="#545454"
              d="m198.574 143.871 5.2-.594a.8.8 0 0 0 .703-.882l-.16-1.391a.798.798 0 0 0-.883-.703l-5.2.597a.791.791 0 0 0-.699.88l.156 1.394c.047.433.442.75.883.7Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#bU)">
        <G clipPath="url(#bV)">
          <G clipPath="url(#bW)">
            <Path
              fill="#545454"
              d="m190.91 144.746 5.203-.594a.796.796 0 0 0 .7-.882l-.16-1.391a.794.794 0 0 0-.88-.7l-5.203.594a.794.794 0 0 0-.699.88l.16 1.394c.047.433.442.75.88.7Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#bX)">
        <G clipPath="url(#bY)">
          <G clipPath="url(#bZ)">
            <Path
              fill="#545454"
              d="m183.25 145.621 5.203-.594a.797.797 0 0 0 .7-.879l-.16-1.394a.794.794 0 0 0-.88-.7l-5.203.594a.794.794 0 0 0-.7.88l.157 1.394c.051.433.446.75.883.7Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#ca)">
        <G clipPath="url(#cb)">
          <G clipPath="url(#cc)">
            <Path
              fill="#545454"
              d="m148.977 138.719 7.082-62.586 1.441.144-4.879 62.7Zm0 0"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#cd)">
        <G clipPath="url(#ce)">
          <G clipPath="url(#cf)" mask="url(#cg)">
            <G clipPath="url(#ch)" transform="translate(186 141)">
              <G clipPath="url(#ci)">
                <G clipPath="url(#cj)">
                  <G clipPath="url(#ck)">
                    <Path
                      fill="#a6a6a6"
                      d="m56.406 1.137 6.766 59.195a3.515 3.515 0 0 0 1.445-.937l-6.59-57.672a3.517 3.517 0 0 0-1.62-.586Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cl)">
                <G clipPath="url(#cm)">
                  <G clipPath="url(#cn)">
                    <Path
                      fill="#a6a6a6"
                      d="m54.465 1.277-1.535.172 6.785 59.364 1.531-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#co)">
                <G clipPath="url(#cp)">
                  <G clipPath="url(#cq)">
                    <Path
                      fill="#a6a6a6"
                      d="m50.992 1.672-1.535.176 6.785 59.359 1.531-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cr)">
                <G clipPath="url(#cs)">
                  <G clipPath="url(#ct)">
                    <Path
                      fill="#a6a6a6"
                      d="m47.52 2.07-1.536.176 6.786 59.36 1.535-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cu)">
                <G clipPath="url(#cv)">
                  <G clipPath="url(#cw)">
                    <Path
                      fill="#a6a6a6"
                      d="m44.05 2.465-1.53.176L49.3 62l1.536-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cx)">
                <G clipPath="url(#cy)">
                  <G clipPath="url(#cz)">
                    <Path
                      fill="#a6a6a6"
                      d="m40.586 2.863-1.531.176 6.78 59.36 1.536-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cA)">
                <G clipPath="url(#cB)">
                  <G clipPath="url(#cC)">
                    <Path
                      fill="#a6a6a6"
                      d="m37.113 3.258-1.531.176 6.785 59.359 1.531-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cD)">
                <G clipPath="url(#cE)">
                  <G clipPath="url(#cF)">
                    <Path
                      fill="#a6a6a6"
                      d="m33.645 3.656-1.532.176 6.785 59.36 1.532-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cG)">
                <G clipPath="url(#cH)">
                  <G clipPath="url(#cI)">
                    <Path
                      fill="#a6a6a6"
                      d="m30.176 4.05-1.535.177 6.785 59.359 1.531-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cJ)">
                <G clipPath="url(#cK)">
                  <G clipPath="url(#cL)">
                    <Path
                      fill="#a6a6a6"
                      d="m26.71 4.45-1.534.175 6.785 59.36 1.531-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cM)">
                <G clipPath="url(#cN)">
                  <G clipPath="url(#cO)">
                    <Path
                      fill="#a6a6a6"
                      d="m23.238 4.844-1.535.176 6.785 59.359 1.535-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cP)">
                <G clipPath="url(#cQ)">
                  <G clipPath="url(#cR)">
                    <Path
                      fill="#a6a6a6"
                      d="m19.77 5.242-1.536.176 6.786 59.36 1.535-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cS)">
                <G clipPath="url(#cT)">
                  <G clipPath="url(#cU)">
                    <Path
                      fill="#a6a6a6"
                      d="m16.297 5.637-1.531.176 6.78 59.359 1.536-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cV)">
                <G clipPath="url(#cW)">
                  <G clipPath="url(#cX)">
                    <Path
                      fill="#a6a6a6"
                      d="m12.832 6.035-1.531.176 6.781 59.36 1.535-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#cY)">
                <G clipPath="url(#cZ)">
                  <G clipPath="url(#da)">
                    <Path
                      fill="#a6a6a6"
                      d="m9.36 6.43-1.532.175 6.785 59.36 1.532-.176Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#db)">
                <G clipPath="url(#dc)">
                  <G clipPath="url(#dd)">
                    <Path
                      fill="#a6a6a6"
                      d="m5.89 6.828-1.53.176 6.785 59.36 1.53-.177Zm0 0"
                    />
                  </G>
                </G>
              </G>
              <G clipPath="url(#de)">
                <G clipPath="url(#df)">
                  <G clipPath="url(#dg)">
                    <Path
                      fill="#a6a6a6"
                      d="m.973 8.102 6.62 57.949a3.6 3.6 0 0 0 1.61.48L2.43 7.27a3.603 3.603 0 0 0-1.457.832Zm0 0"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G clipPath="url(#dh)">
        <G clipPath="url(#di)">
          <G clipPath="url(#dj)">
            <Path
              fill="#545454"
              d="M138.426 174.867a17.915 17.915 0 0 0 .722 3.36c.176.546.38 1.085.606 1.613a17.664 17.664 0 0 0 5.184 6.765c.449.356.917.692 1.398 1.004.484.309.98.598 1.488.86a17.72 17.72 0 0 0 4.875 1.66 17.813 17.813 0 0 0 5.145.172 17.63 17.63 0 0 0 3.36-.727 16.957 16.957 0 0 0 1.608-.601 18.92 18.92 0 0 0 1.547-.762c.5-.277.989-.582 1.461-.906.473-.328.93-.676 1.368-1.047.437-.371.855-.766 1.257-1.176a17.762 17.762 0 0 0 3-4.184c.262-.507.5-1.03.711-1.566a17.384 17.384 0 0 0 .945-3.305c.106-.566.18-1.132.227-1.707.047-.57.067-1.144.059-1.718a18.049 18.049 0 0 0-.39-3.415 17.404 17.404 0 0 0-.446-1.664 17.627 17.627 0 0 0-1.363-3.156c-.282-.5-.583-.988-.91-1.46a16.88 16.88 0 0 0-1.048-1.368 17.849 17.849 0 0 0-2.468-2.394 16.83 16.83 0 0 0-1.399-1c-.48-.313-.976-.602-1.488-.864a17.647 17.647 0 0 0-3.195-1.265c-.555-.16-1.114-.29-1.676-.391a16.878 16.878 0 0 0-1.707-.227 18.047 18.047 0 0 0-1.719-.058c-.574.008-1.148.047-1.719.11a17.914 17.914 0 0 0-3.363.726c-.547.176-1.082.375-1.61.605a17.101 17.101 0 0 0-3.007 1.668c-.473.324-.926.672-1.363 1.043-.442.375-.86.766-1.258 1.176a18.81 18.81 0 0 0-1.137 1.293c-.355.453-.691.918-1.004 1.398-.312.485-.597.98-.86 1.493-.265.511-.5 1.03-.71 1.566a16.325 16.325 0 0 0-.555 1.629 17.4 17.4 0 0 0-.62 3.383c-.048.57-.067 1.144-.056 1.718.008.575.043 1.149.11 1.72Zm0 0"
            />
            <G mask="url(#dk)">
              <G clipPath="url(#dl)" transform="translate(138 155)">
                <G clipPath="url(#dm)">
                  <G clipPath="url(#dn)">
                    <G clipPath="url(#do)">
                      <Path
                        fill="#a6a6a6"
                        d="M2.441 19.637c.114 1.011.329 2.004.641 2.972.309.97.711 1.899 1.207 2.79.492.89 1.07 1.726 1.727 2.503a15.51 15.51 0 0 0 2.183 2.114 15.432 15.432 0 0 0 5.383 2.77c.977.28 1.973.464 2.988.546a15.514 15.514 0 0 0 16.05-20.191 15.526 15.526 0 0 0-2.938-5.293 15.517 15.517 0 0 0-2.182-2.114 15.823 15.823 0 0 0-2.55-1.652 15.715 15.715 0 0 0-2.829-1.117 15.492 15.492 0 0 0-11.797 1.348 15.644 15.644 0 0 0-2.5 1.726c-.777.66-1.48 1.387-2.117 2.184a15.41 15.41 0 0 0-1.648 2.554c-.465.907-.84 1.848-1.118 2.828-.28.98-.464 1.977-.546 2.993a15.2 15.2 0 0 0 .046 3.039Zm0 0"
                      />
                    </G>
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G clipPath="url(#dp)">
        <G clipPath="url(#dq)">
          <Path fill="#fff" d="M23.297 174.543H351.73v66.621H23.297Zm0 0" />
        </G>
      </G>
      <G clipPath="url(#dr)">
        <Path
          fillRule="evenodd"
          d="M54.316 192.305c22.446-2.727 37.72-2.668 46.985-2.75 5.031-.032 9.543 3.992 2.094 4.472-5.227.332-2.641.34-7.57.34-4.114-.012-8.38.578-8.036 1.934.207.812 1.953 2.722 4.887 2.828 5.562.2 10.625-.152 16.246-.137 2.86 0 4.469-.332 7.34-.304 6.601.085-.774 3.777 4.37 3.777 7.458 0 15.954.492 23.31.594 4.644.07 6.574 2.648 2.722 3.382-2.238.438-15.086.422-18.598.422-6.05 0-1.054-3.738-9.82-1.386-3.129.84-2.535.66-3.437 1.683-.704.793-1.88 3.653 4.238 3.653 3.223 0 4.008 1.73 8.3 1.73h7.16c3.942 0 12.958 3.25 6.876 3.25-2.504 0-10.535-.04-11.61 1.031-4.652 4.613 15.684 3.875 18.91 3.875 7.16 0 8.458-4.61 12.758-4.61 2.04 0 .243.06 2.422.126.91.027 1.66-.09 2.352.586 1.972 1.957-7.926 1.828-5.16 4.558.972.965 3.562 1.809 5.863 1.735 3.414-.098 7.781-.254 9.297-.422 1.09-.121 1.523-.399 1.523-1.766 0-1.078-2.418-1.332-3.3-1.332-.891 0-6.7-.777-4.477-1.207 2.281-.43 1.418-1.918 4.672-1.918 3.27 0 5.746.031 5.832-3.543.027-1.086.082-2.293.281-2.496.36-.351 1.793-1.062 2.863-1.062 3.223 0 11.735.363 12.84 2.836.324.722.715 2.129-.36 2.129h-7.554c-2.812 0-3.656 2.136-1.043 2.136 6.086 0 13.973.707 20.77.707 1.074 0 7.16-.36 7.879.348 1.07 1.066-1.082 2.129-1.082 3.195 0 2.485 13.254 1.778 15.757 1.778 1.434 0 5.375-1.067 5.73-2.133.356-.711-.378-1.535-.718-1.414-1.168.402-12.203-.59-10.664-1.711v-1.422c0-.711 8.16-1.133 8.16-1.484v-1.063c0-1.066-8.953-1.066-10.387-1.066-6.75 0-13.847-4.36-3.066-4.223 10.684.148 21.813.598 32.145.66 4.414.031 3.32-4.25 6.722-4.25h8.356c3.906 0 5.703-3.187.238-3.187-11.094 0-15.746-1.067-26.848-1.067-2.152 0-8.234-2.195-6.804-2.914 3.582-1.773 12.527 0 17.183 0 3.942.36 15.778.758 18.977-.707.277-.121.71-.285 1.246-.453-1.441-1.465-9.121-.008-9.121-1.586 0-2.324-7.64-4.074-.082-4.547 3.965-.254 24.293.32 25.816.32 11.125 0 21.86.301 32.973.301-27.852-16.402-226.527-18.945-266.356 1.774"
        />
      </G>
      <G clipPath="url(#ds)">
        <Path
          fill="#ffd827"
          fillRule="evenodd"
          d="M156.168 137.957c-7.297 3.14-13.55 7.14-12.773 14.668-8.54 2.914-23.747 6.5-22.25 18.512.164 1.695 1.699 4.484 2.035 5.898-8.93.66-17.399 1.461-25.243 2.422a90.29 90.29 0 0 1-1.55-16.687c0-26.958 11.82-51.254 30.543-67.961l.02.023a.604.604 0 0 0 .034.625l15.875 22.922c-.132.207-.152.441-.039.605m17.66 17.586c-.511.094-.984.203-1.43.325l-13.796-19.606c-.117-.16-.352-.23-.578-.172l-15.863-22.93a.616.616 0 0 0-.575-.257l-.117-.168c15.16-13.067 34.645-21.242 55.973-22.035l-1.242 3.515a.617.617 0 0 0-.489.395l-10.715 30.418c-.246 0-.449.125-.515.316Zm53.61-33.87c-.082 0-2.004.382-2.09.382-.164 0-.89-.21-.988-.059-.227.34-.407 1.215-.649 1.465-.16.153.082.153-.406.153-.477 0-1.16.156-1.527 0-.567-.23-1.621-.903-3.078-.727-.247.027-.48-.164-.649-.25-.07 0-.48-.234-.48-.398 0-1.16 2.863-1.457 2.863-1.973-.727 0-3.027-.547-3.918-.547-.719 0-1.29 0-1.773-.234-.735-.325-2.184-1.055-3.153-1.055-1.222 0-3.238.242-4.207-.402 0-.649 2.828-1.301 3.477-1.383 2.508-.324 5.82-1.707 8.246-1.707 1.074 0 2.457.222 3.34.547 1 .37.941.879 1.703.636 2.082-.671 2.949-.332 2.777.77 1.664.21 4.04.492 5.234.738 3.637.746 2.793 3.336 4.848 5.399.324.332-2.629-.305-2.945-.305-1.055 0-2.914.164-3.719-.238-.25-.082-2.59-.813-2.906-.813Zm-26.598-31.04c50.192 0 91.117 40.926 91.117 91.11 0 5.437-.488 10.746-1.406 15.914-6.387-.664-13.254-1.246-20.457-1.754-.77-7.41-1.707-15.883-2.305-22.27-.445-4.754-4.515-10.27-9.222-11.074-18.93-3.223-42.524-3.336-61.055-1.133-.297.035-.601.063-.894.102a.313.313 0 0 0-.192-.078c-3.539-5.344-12.703-6.727-19.308-6.301l10.164-28.824c.07-.188-.02-.399-.2-.563l10.727-30.414a.592.592 0 0 0-.121-.613l1.437-4.082c.575-.012 1.145-.02 1.715-.02Zm0 0"
        />
      </G>
      <G clipPath="url(#dt)">
        <G clipPath="url(#du)">
          <Path fill="#f1ac00" d="M96.387 71.66h182.222v107.797H96.387Zm0 0" />
        </G>
      </G>
      <G clipPath="url(#dv)">
        <Path fill="#fff" d="M119.371 232.422H276.02v36.492H119.37Zm0 0" />
      </G>
      <G clipPath="url(#dw)">
        <Path d="m210.02 93.77 3.472-4.06-4.699.763c-.305.05-.625-.063-.79-.32-.276-.434-.194-1.317 2.017-3.02 3.64-2.805 7.867-2.719 7.867-2.719-1.617-.484-3.285-.625-4.563-.644a8.409 8.409 0 0 0-6.476 2.886c-1.657 1.918-2.504 4.063-2.504 4.063-8.457-1.34-13.258 11.656-13.258 11.656 6-7.273 10.84-9.07 12.637-9.477.351-.078 1-.035 1.343.079 1.383.445 2.809-.211 2.809-.211 1.34-.399 2.145 1.004 2.145 1.004Zm0 0" />
      </G>
      <G clipPath="url(#dx)">
        <Path d="M222.914 96.617s-.437-.512-1.14-1.05a5.173 5.173 0 0 0-5.22-.637 8.389 8.389 0 0 0-1.523.847s2.102-.77 4.414.016c1.407.477 1.598.902 1.535 1.168a.417.417 0 0 1-.34.297l-2.488.422 2.446 1.437s.16-.84.902-.87c0 0 .828.085 1.445-.376.153-.113.47-.246.657-.27.972-.101 3.71-.027 7.98 2.59 0 0-4.664-5.691-8.668-3.574Zm0 0" />
      </G>
      <G clipPath="url(#dy)">
        <Path d="M210.293 102.574s-3.578-.918-5.691 3.66c0 0 1.976-2.312 4.675-2.668a2.29 2.29 0 0 1 1.102.114c.36.132.937.203 1.316-.48 0 0 .493-2.231 3.903-1.493 0 0-2.832-2.164-5.305.867Zm0 0" />
      </G>
      <G clipPath="url(#dz)">
        <G clipPath="url(#dA)">
          <G clipPath="url(#dB)">
            <Path
              fill="#545454"
              d="m213.973 138.727-30.891-4.993-7.363 9.664-26.985 35.43 5.504-57.004-.879-.066 5.258-54.535c.867-.223 1.586-.98 1.668-1.942.098-1.23-.793-2.328-2.02-2.426-1.23-.097-2.327.79-2.425 2.02a2.27 2.27 0 0 0 1.281 2.234l-5.258 54.536-.883-.067-5.984 62.277-.066.086 43.297 32.98 7.925-10.405-17.066-12.996 16.59-21.782-8.664-6.601-16.567 21.75-8.902-6.778 22.922-30.093 34.629 26.379 7.453-9.786-24.285-18.5 23.77 4.32 4.241-5.57-10.52-22.078 24.462 18.633 7.453-9.785-43.356-33.024-7.406 9.727Zm0 0"
            />
          </G>
        </G>
      </G>
      <Path
        fill="#289db9"
        d="M72.63 262.656c-1.511 0-2.917-.18-4.218-.531-1.305-.364-2.61-.907-3.922-1.625.281-1.477.422-3.36.422-5.64.844-.24 1.941-.36 3.297-.36.125 2.117.515 3.605 1.172 4.468.656.856 1.773 1.282 3.359 1.282 1.332 0 2.32-.282 2.969-.844.644-.563.968-1.273.968-2.14 0-.665-.199-1.243-.593-1.735a5.226 5.226 0 0 0-1.516-1.25c-.605-.352-1.445-.781-2.516-1.281-1.511-.696-2.742-1.348-3.687-1.953-.938-.614-1.746-1.43-2.422-2.454-.668-1.03-1-2.312-1-3.843 0-2.29.738-4.032 2.219-5.219 1.488-1.188 3.441-1.781 5.86-1.781 1.288 0 2.577.156 3.859.468 1.28.313 2.253.684 2.921 1.11 0 2.273.082 3.984.25 5.14-.386.188-.87.329-1.453.422-.586.094-1.164.141-1.734.141-.336-1.883-.836-3.188-1.5-3.906-.656-.719-1.531-1.078-2.625-1.078-1.012 0-1.82.234-2.422.703-.594.468-.89 1.148-.89 2.031 0 .719.218 1.352.656 1.89.445.532 1 .993 1.656 1.376.664.375 1.57.828 2.719 1.359 1.531.719 2.773 1.383 3.734 1.984.957.594 1.77 1.391 2.438 2.391.664 1 1 2.23 1 3.687 0 2.157-.774 3.899-2.313 5.22-1.543 1.312-3.773 1.968-6.687 1.968ZM96.256 262.656c-2.438 0-4.575-.531-6.407-1.594-1.824-1.07-3.234-2.554-4.234-4.453-.992-1.906-1.484-4.078-1.484-6.516 0-2.457.52-4.617 1.562-6.484 1.04-1.875 2.485-3.316 4.328-4.328 1.844-1.02 3.922-1.531 6.235-1.531 2.394 0 4.515.508 6.36 1.515a10.64 10.64 0 0 1 4.296 4.25c1.031 1.825 1.547 3.934 1.547 6.328 0 2.461-.512 4.657-1.531 6.594-1.012 1.938-2.446 3.461-4.297 4.563-1.856 1.105-3.98 1.656-6.375 1.656Zm.578-2.344c1.844 0 3.285-.879 4.328-2.64 1.039-1.77 1.562-4.102 1.562-7 0-1.957-.296-3.75-.89-5.375-.586-1.633-1.414-2.922-2.485-3.86-1.074-.945-2.293-1.422-3.656-1.422-1.773 0-3.183.82-4.234 2.453-1.055 1.637-1.578 3.883-1.578 6.735 0 2.012.258 3.867.781 5.562.531 1.7 1.312 3.047 2.344 4.047 1.039 1 2.316 1.5 3.828 1.5ZM130.659 252.531c0 2.156-.153 3.86-.453 5.11-.305 1.242-.844 2.25-1.625 3.03-1.387 1.325-3.434 1.985-6.141 1.985-2.293 0-4.11-.313-5.453-.938-1.336-.625-2.293-1.566-2.875-2.828-.574-1.27-.86-2.937-.86-5v-10c0-1.03-.062-1.773-.187-2.234-.117-.469-.324-.8-.625-1-.293-.207-.773-.363-1.437-.469-.149-.613-.22-1.351-.22-2.219.958.075 2.473.11 4.548.11 2.875 0 4.875-.035 6-.11 0 .938-.075 1.68-.22 2.22-.718.105-1.233.25-1.546.437-.305.187-.516.523-.64 1-.118.48-.172 1.234-.172 2.265v9.438c0 2.25.382 3.953 1.156 5.11.781 1.155 2.039 1.734 3.781 1.734a5.15 5.15 0 0 0 1.875-.36 3.72 3.72 0 0 0 1.547-1.078c.426-.539.738-1.27.937-2.187.207-.926.313-2.286.313-4.079v-7.578c0-1.195-.074-2.109-.219-2.734-.148-.633-.387-1.094-.719-1.375-.336-.29-.836-.488-1.5-.594a12.398 12.398 0 0 1-.187-2.219c.883.075 2.129.11 3.734.11 1.508 0 2.719-.035 3.625-.11 0 .868-.074 1.606-.218 2.22-.618.105-1.079.292-1.391.562-.313.273-.531.715-.656 1.328-.118.605-.172 1.484-.172 2.64ZM156.515 237.968c-.055 1.868.14 3.98.578 6.344-.719.313-1.68.469-2.875.469-.187-1.57-.594-2.719-1.219-3.438-.625-.718-1.57-1.078-2.828-1.078h-1.265v16.328c0 1 .082 1.743.25 2.22.164.48.46.823.89 1.03.438.2 1.125.325 2.063.375.187.45.28 1.188.28 2.22-1.386-.075-3.37-.11-5.952-.11-3.024 0-5.262.035-6.719.11 0-.833.11-1.571.328-2.22.938-.05 1.633-.175 2.094-.375.469-.207.797-.554.984-1.046.196-.489.297-1.223.297-2.204v-16.328h-.828c-1.406 0-2.422.356-3.047 1.063-.625.699-1.117 1.851-1.469 3.453-1.293 0-2.242-.156-2.843-.469.218-1.02.398-2.101.547-3.25.144-1.156.218-2.187.218-3.094 1.719.075 5.149.11 10.297.11 4.281 0 7.688-.035 10.219-.11ZM181.836 256.593c0 .98.062 1.715.187 2.204.133.492.367.84.703 1.046.332.2.836.325 1.516.375.164.47.25 1.211.25 2.22-1.25-.075-2.95-.11-5.094-.11-2.324 0-4.226.035-5.703.11 0-.907.094-1.645.281-2.22.664-.05 1.16-.175 1.485-.375.32-.207.55-.554.687-1.046.133-.489.203-1.223.203-2.204v-5.64c-4.117 0-7.039.11-8.765.328v5.312c0 .98.07 1.715.218 2.204.145.492.383.84.72 1.046.331.2.831.325 1.5.375.144.5.218 1.243.218 2.22-1.219-.075-2.918-.11-5.094-.11-2.293 0-4.183.035-5.672.11 0-.864.086-1.602.266-2.22.664-.05 1.164-.175 1.5-.375.332-.207.562-.554.687-1.046.133-.489.203-1.223.203-2.204v-12.812c0-.977-.07-1.703-.203-2.172-.125-.469-.351-.8-.672-1-.324-.207-.828-.348-1.515-.422-.18-.52-.266-1.258-.266-2.219 1.227.075 3.063.11 5.5.11 2.07 0 3.828-.035 5.266-.11 0 .407-.012.805-.031 1.188-.024.387-.094.73-.22 1.031-.667.074-1.167.211-1.5.406-.335.188-.57.524-.702 1-.137.48-.203 1.211-.203 2.188v4.922h8.765v-4.922c0-.977-.07-1.703-.203-2.172-.137-.469-.367-.8-.687-1-.325-.207-.829-.348-1.516-.422-.168-.52-.25-1.258-.25-2.219 1.258.075 3.086.11 5.484.11 2.102 0 3.875-.035 5.313-.11 0 .961-.102 1.7-.297 2.22-.668.073-1.164.21-1.484.405-.325.188-.555.524-.688 1-.125.48-.187 1.211-.187 2.188ZM206.293 262.656c-2.324 0-4.39-.531-6.203-1.594-1.805-1.07-3.21-2.554-4.219-4.453-1-1.906-1.5-4.086-1.5-6.547 0-2.601.563-4.832 1.688-6.687 1.125-1.852 2.613-3.254 4.468-4.203 1.852-.946 3.868-1.422 6.047-1.422 2.657 0 5.286.625 7.891 1.875-.262 1.5-.39 3.355-.39 5.562-.555.281-1.485.422-2.798.422-.054-2.05-.464-3.508-1.234-4.375-.762-.863-1.86-1.297-3.297-1.297-2.242 0-3.902.875-4.984 2.625-1.074 1.75-1.61 3.938-1.61 6.563 0 3.156.688 5.73 2.063 7.718 1.375 1.98 3.352 2.97 5.937 2.97.958 0 1.946-.15 2.97-.454a13.483 13.483 0 0 0 3.015-1.344c.195.18.375.418.531.72.156.292.254.585.297.874-1.2.98-2.496 1.734-3.89 2.266-1.4.52-2.993.781-4.782.781ZM229.52 262.656c-2.438 0-4.574-.531-6.406-1.594-1.825-1.07-3.235-2.554-4.235-4.453-.992-1.906-1.484-4.078-1.484-6.516 0-2.457.52-4.617 1.562-6.484 1.04-1.875 2.485-3.316 4.328-4.328 1.844-1.02 3.922-1.531 6.235-1.531 2.394 0 4.515.508 6.36 1.515a10.64 10.64 0 0 1 4.296 4.25c1.031 1.825 1.547 3.934 1.547 6.328 0 2.461-.512 4.657-1.531 6.594-1.012 1.938-2.446 3.461-4.297 4.563-1.856 1.105-3.98 1.656-6.375 1.656Zm.578-2.344c1.844 0 3.285-.879 4.328-2.64 1.04-1.77 1.563-4.102 1.563-7 0-1.957-.297-3.75-.891-5.375-.586-1.633-1.414-2.922-2.484-3.86-1.075-.945-2.293-1.422-3.657-1.422-1.773 0-3.183.82-4.234 2.453-1.055 1.637-1.578 3.883-1.578 6.735 0 2.012.258 3.867.781 5.562.531 1.7 1.313 3.047 2.344 4.047 1.039 1 2.316 1.5 3.828 1.5ZM267.61 260.218c.196.649.297 1.387.297 2.22-1.148-.075-2.797-.11-4.953-.11-2.469 0-4.242.035-5.312.11 0-.958.082-1.696.25-2.22.57-.125.988-.273 1.25-.453.27-.175.406-.437.406-.78 0-.282-.156-.79-.469-1.532l-.828-1.938c-3.18 0-6.094.086-8.75.25l-.469 1.188c-.242.668-.36 1.195-.36 1.578 0 .98.571 1.543 1.72 1.687.164.575.25 1.313.25 2.22-.813-.075-2.09-.11-3.828-.11-1.493 0-2.57.035-3.235.11 0-.884.094-1.626.281-2.22a2.211 2.211 0 0 0 1.454-.89c.375-.488.847-1.438 1.421-2.844l7.532-18.437c.332-.07.672-.118 1.015-.141a12.97 12.97 0 0 1 1.14-.047l8.22 18.406c.5 1.125.894 1.953 1.187 2.485.3.523.582.886.844 1.093.27.2.582.325.937.375Zm-10.25-6.718-1.937-4.516a40.297 40.297 0 0 1-1.688-4.594 61.162 61.162 0 0 1-1.578 4.563l-1.797 4.547ZM278.265 262.656c-1.512 0-2.918-.18-4.219-.531-1.305-.364-2.61-.907-3.922-1.625.281-1.477.422-3.36.422-5.64.844-.24 1.941-.36 3.297-.36.125 2.117.515 3.605 1.172 4.468.656.856 1.773 1.282 3.36 1.282 1.331 0 2.32-.282 2.968-.844.644-.563.969-1.273.969-2.14 0-.665-.2-1.243-.594-1.735a5.226 5.226 0 0 0-1.516-1.25c-.605-.352-1.445-.781-2.515-1.281-1.512-.696-2.743-1.348-3.688-1.953-.937-.614-1.746-1.43-2.422-2.454-.668-1.03-1-2.312-1-3.843 0-2.29.738-4.032 2.219-5.219 1.488-1.188 3.441-1.781 5.86-1.781 1.288 0 2.577.156 3.859.468 1.281.313 2.254.684 2.922 1.11 0 2.273.082 3.984.25 5.14-.387.188-.872.329-1.454.422-.585.094-1.164.141-1.734.141-.336-1.883-.836-3.188-1.5-3.906-.656-.719-1.531-1.078-2.625-1.078-1.012 0-1.82.234-2.422.703-.594.468-.89 1.148-.89 2.031 0 .719.218 1.352.656 1.89.445.532 1 .993 1.656 1.376.664.375 1.57.828 2.719 1.359 1.531.719 2.773 1.383 3.734 1.984.957.594 1.77 1.391 2.438 2.391.664 1 1 2.23 1 3.687 0 2.157-.774 3.899-2.313 5.22-1.543 1.312-3.773 1.968-6.687 1.968ZM310.687 237.968c-.055 1.868.14 3.98.578 6.344-.719.313-1.68.469-2.875.469-.188-1.57-.594-2.719-1.219-3.438-.625-.718-1.57-1.078-2.828-1.078h-1.266v16.328c0 1 .082 1.743.25 2.22.164.48.461.823.89 1.03.438.2 1.126.325 2.063.375.188.45.282 1.188.282 2.22-1.387-.075-3.371-.11-5.953-.11-3.024 0-5.262.035-6.72.11 0-.833.11-1.571.329-2.22.937-.05 1.633-.175 2.094-.375.468-.207.797-.554.984-1.046.195-.489.297-1.223.297-2.204v-16.328h-.828c-1.406 0-2.422.356-3.047 1.063-.625.699-1.117 1.851-1.469 3.453-1.293 0-2.242-.156-2.844-.469.22-1.02.399-2.101.547-3.25.145-1.156.22-2.187.22-3.094 1.718.075 5.148.11 10.296.11 4.281 0 7.687-.035 10.219-.11Zm0 0"
      />
      <Path
        fill="#f1ac00"
        d="M146.254 293.727a6.312 6.312 0 0 0-.094-.313 3.717 3.717 0 0 1-.094-.343 4.543 4.543 0 0 1-.046-.547V289.102c0-.77-.137-1.313-.407-1.625-.273-.313-.703-.469-1.297-.469h-.906v6.719h-2.594V277.21h3.922c1.352 0 2.332.32 2.938.953.601.625.906 1.575.906 2.844v1.297c0 1.7-.57 2.82-1.703 3.36.664.261 1.117.699 1.36 1.312.25.605.374 1.34.374 2.203v2.547c0 .406.016.766.047 1.078.031.305.11.61.235.922Zm-2.844-14.156v5.078h1.016c.488 0 .867-.125 1.14-.375.282-.258.422-.719.422-1.375v-1.625c0-.602-.11-1.035-.328-1.297-.21-.27-.539-.406-.984-.406ZM171.875 293.727h-2.625l-.438-3h-3.187l-.453 3h-2.375l2.64-16.516h3.797Zm-5.922-5.234h2.5l-1.25-8.36ZM186.239 277.211h4.11c1.3 0 2.269.352 2.906 1.047.644.688.968 1.7.968 3.031v8.36c0 1.336-.324 2.351-.968 3.047-.637.687-1.606 1.03-2.907 1.03h-4.11Zm2.594 2.36v11.797h1.468c.407 0 .727-.114.97-.344.237-.238.359-.66.359-1.266v-8.578c0-.601-.122-1.02-.36-1.25-.242-.238-.562-.36-.969-.36ZM209.033 277.211h2.593v16.516h-2.593ZM229.074 289.93c0 .594.118 1.016.36 1.266.25.242.578.36.984.36s.727-.118.969-.36c.25-.25.375-.672.375-1.266v-8.922c0-.594-.125-1.008-.375-1.25-.242-.25-.563-.375-.969-.375s-.734.125-.984.375c-.242.242-.36.656-.36 1.25Zm-2.593-8.75c0-1.344.336-2.367 1.015-3.078.676-.719 1.649-1.078 2.922-1.078 1.27 0 2.242.36 2.922 1.078.676.71 1.016 1.734 1.016 3.078v8.578c0 1.344-.34 2.375-1.016 3.094-.68.71-1.652 1.062-2.922 1.062-1.273 0-2.246-.351-2.922-1.062-.68-.719-1.015-1.75-1.015-3.094Zm0 0"
      />
    </Svg>
  </View>
);
const Memo = memo(Logo);
export default Memo;
