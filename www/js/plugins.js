// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
    [
        { "name": "TMMapHpGauge", "status": true, "description": "マップシーンに顔グラフィックとＨＰゲージを表示します。\n必要に応じてＭＰや変数などをゲージで表示することもできます。", "parameters": { "gaugeWindowX": "0", "gaugeWindowY": "0", "gaugeWindowWidth": "200", "gaugeWindowHeight": "200", "gaugeA": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"22\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"21\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeB": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"62\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"22\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeC": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"102\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"23\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeD": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"142\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"24\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeE": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"182\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"25\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeF": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"222\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"26\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeG": "{\"type\":\"VN\",\"x\":\"0\",\"y\":\"312\",\"width\":\"120\",\"height\":\"42\",\"fontSize\":\"13\",\"param\":\"436\",\"max\":\"437\",\"name\":\" Desire\",\"color\":\"#ffffff #ffffff\"}", "gaugeH": "{\"type\":\"VN\",\"x\":\"22\",\"y\":\"332\",\"width\":\"120\",\"height\":\"42\",\"fontSize\":\"13\",\"param\":\"438\",\"max\":\"439\",\"name\":\" Stamina\",\"color\":\"#ffff00 #ffa500\"}", "gaugeI": "{\"type\":\"VN\",\"x\":\"44\",\"y\":\"352\",\"width\":\"120\",\"height\":\"42\",\"fontSize\":\"13\",\"param\":\"440\",\"max\":\"30\",\"name\":\" Memories\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeJ": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"262\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"27\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeK": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"302\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"13\",\"param\":\"28\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeL": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"342\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"13\",\"param\":\"29\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeM": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"382\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"13\",\"param\":\"39\",\"max\":\"40\",\"name\":\"\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeN": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"142\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"13\",\"max\":\"30\",\"name\":\"\",\"color\":\"#1e90ff #6495ed\"}", "gaugeO": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"182\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"14\",\"max\":\"30\",\"name\":\"\",\"color\":\"#ffa500 #ffd700\"}", "gaugeP": "{\"type\":\"VN\",\"x\":\"580\",\"y\":\"40\",\"width\":\"140\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"21\",\"max\":\"30\",\"name\":\"FVR\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeQ": "{\"type\":\"VN\",\"x\":\"590\",\"y\":\"68\",\"width\":\"130\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"22\",\"max\":\"30\",\"name\":\"LWD\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeR": "{\"type\":\"VN\",\"x\":\"590\",\"y\":\"96\",\"width\":\"130\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"23\",\"max\":\"30\",\"name\":\"SRV\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeS": "{\"type\":\"VN\",\"x\":\"590\",\"y\":\"124\",\"width\":\"130\",\"height\":\"42\",\"fontSize\":\"15\",\"param\":\"24\",\"max\":\"30\",\"name\":\"PERV\",\"color\":\"#ff60c0 #ffa0e0\"}", "gaugeT": "{\"type\":\"VN\",\"x\":\"200\",\"y\":\"0\",\"width\":\"350\",\"height\":\"42\",\"fontSize\":\"13\",\"param\":\"134\",\"max\":\"30\",\"name\":\"Mood\",\"color\":\"#ffff00 #ffa500\"}", "faceOffsetX": "-4", "faceOffsetY": "-4", "stateIconMax": "4", "stateIconX": "156", "stateIconY": "24", "goldWidth": "0", "goldX": "540", "goldY": "185", "vnMax": "false", "shakeTime": "20", "startVisible": "false", "windowOpacity": "0", "collideOpacity": "0", "messageBusyHide": "false", "eventBusyHide": "false", "useBattleScene": "false", "gaugeWindowBattleX": "0", "gaugeWindowBattleY": "0" } },
        { "name": "Vitsuno_PictureGallery", "status": true, "description": "ピクチャーギャラリー機能を加えるプラグインです。", "parameters": { "On Menu": "0", "Command Name": "ギャラリー", "Max Size": "11", "Thumbnail Width": "150", "Thumbnail Height": "100", "None File": "GalleryNone", "Use Common Mode": "0" } },
        { "name": "PictureZIndex", "status": true, "description": "ピクチャのZ-Index（重なり順序）を設定します。", "parameters": {} },
        { "name": "MOG_Weather_EX", "status": true, "description": "(v3.4 *) Adiciona novos efeitos de climas.", "parameters": { "Battle Weather": "true" } },
        { "name": "Community_Basic", "status": true, "description": "基本的なパラメーターを設定するプラグインです。", "parameters": { "cacheLimit": "20", "screenWidth": "816", "screenHeight": "624", "changeWindowWidthTo": "", "changeWindowHeightTo": "", "renderingMode": "auto", "alwaysDash": "off" } },
        { "name": "MadeWithMv", "status": true, "description": "メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。", "parameters": { "Show Made With MV": "true", "Made with MV Image": "MadeWithMv", "Show Custom Splash": "false", "Custom Image": "", "Fade Out Time": "120", "Fade In Time": "120", "Wait Time": "160" } },
        { "name": "FTKR_ExMessageWindow2", "status": true, "description": "v2.4.0 一度に複数のメッセージウィンドウを表示するプラグイン", "parameters": { "--初期設定--": "", "Create ExWindow Number": "10", "--シーン開始時--": "", "Scene Start Terminate": "1", "--イベント終了時--": "", "Reset Window Id": "1" } },
        { "name": "FTKR_CustomSimpleActorStatus", "status": true, "description": "v3.5.3 アクターのステータス表示を変更するプラグイン", "parameters": { "face": "", "Face Image Width": "144", "Face Image Height": "144", "Face Position X": "1", "chara": "", "Chara Image Width": "48", "Chara Image Height": "48", "Chara Position X": "1", "Chara Direction": "0", "sv": "", "Sv Image Width": "64", "Sv Image Height": "64", "Sv Position X": "1", "Enabled Sv Motion": "1", "Sv Image Motion": "wait", "Enabled State Motion": "1", "state": "", "Enable CSS States": "1", "Animation Wait": "40", "Enable Overlap": "0", "Overlap Rate": "0.5", "State Icon Padding": "4", "Enable Auto Scale": "0", "pdiff": "", "Enabled Escapecharacters By PDIFF": "true", "Format PDIFF Plus": "\\c[24]+ %1", "Format PDIFF Minus": "\\c[25]- %1", "xparam": "", "Disp Decimals Param": "0", "equip": "", "Equip Right Arrow": "\\c[16]→", "ediff": "", "Enabled Escapecharacters By EDIFF": "true", "Format EDIFF Plus": "\\c[24]+ %1", "Format EDIFF Minus": "\\c[25]- %1", "aopdiff": "", "Enabled Escapecharacters By AOPDIFF": "true", "Format AOPDIFF Plus": "\\c[24]+ %1", "Format AOPDIFF Minus": "\\c[25]- %1", "ediffaop": "", "Enabled Escapecharacters By EDIFFAOP": "true", "Format EDIFFAOP Plus": "\\c[24]+ %1", "Format EDIFFAOP Minus": "\\c[25]- %1", "image": "", "Image Position X": "1", "message": "", "Display LevelUp Message": "\\C[17]%3 Level Up!", "customParam": "", "--Custom Param 0--": "", "Custom 0 Display Name": "\\c[16]現在の経験値", "Custom 0 References": "", "Custom 0 Unit": "", "--Custom Param 1--": "", "Custom 1 Display Name": "", "Custom 1 References": "a.currentExp()", "Custom 1 Unit": "", "--Custom Param 2--": "", "Custom 2 Display Name": "\\c[16]次のレベルまで", "Custom 2 References": "", "Custom 2 Unit": "", "--Custom Param 3--": "", "Custom 3 Display Name": "", "Custom 3 References": "a.nextRequiredExp()", "Custom 3 Unit": "", "--Custom Param 4--": "", "Custom 4 Display Name": "", "Custom 4 References": "", "Custom 4 Unit": "", "--Custom Param 5--": "", "Custom 5 Display Name": "", "Custom 5 References": "", "Custom 5 Unit": "", "--Custom Param 6--": "", "Custom 6 Display Name": "", "Custom 6 References": "", "Custom 6 Unit": "", "--Custom Param 7--": "", "Custom 7 Display Name": "", "Custom 7 References": "", "Custom 7 Unit": "", "--Custom Param 8--": "", "Custom 8 Display Name": "", "Custom 8 References": "", "Custom 8 Unit": "", "--Custom Param 9--": "", "Custom 9 Display Name": "", "Custom 9 References": "", "Custom 9 Unit": "", "--Custom Param 10--": "", "Custom 10 Display Name": "", "Custom 10 References": "", "Custom 10 Unit": "", "--Custom Param 11--": "", "Custom 11 Display Name": "", "Custom 11 References": "", "Custom 11 Unit": "", "--Custom Param 12--": "", "Custom 12 Display Name": "", "Custom 12 References": "", "Custom 12 Unit": "", "--Custom Param 13--": "", "Custom 13 Display Name": "", "Custom 13 References": "", "Custom 13 Unit": "", "--Custom Param 14--": "", "Custom 14 Display Name": "", "Custom 14 References": "", "Custom 14 Unit": "", "--Custom Param 15--": "", "Custom 15 Display Name": "", "Custom 15 References": "", "Custom 15 Unit": "", "--Custom Param 16--": "", "Custom 16 Display Name": "", "Custom 16 References": "", "Custom 16 Unit": "", "--Custom Param 17--": "", "Custom 17 Display Name": "", "Custom 17 References": "", "Custom 17Unit": "", "--Custom Param 18--": "", "Custom 18 Display Name": "", "Custom 18 References": "", "Custom 18 Unit": "", "--Custom Param 19--": "", "Custom 19 Display Name": "", "Custom 19 References": "", "Custom 19 Unit": "", "customGauge": "", "Gauge Param Digit": "4", "--Gauge Param 0--": "", "Gauge 0 Display Name": "\\C[16]EXP", "Gauge 0 References": "", "Gauge 0 Current": "a.isMaxLevel() ? '--------' : a.currentExp()", "Gauge 0 Max": "a.isMaxLevel() ? '--------' : a.nextLevelExp()", "Gauge 0 Color1": "17", "Gauge 0 Color2": "6", "--Gauge Param 1--": "", "Gauge 1 Display Name": "", "Gauge 1 References": "", "Gauge 1 Current": "", "Gauge 1 Max": "", "Gauge 1 Color1": "", "Gauge 1 Color2": "", "--Gauge Param 2--": "", "Gauge 2 Display Name": "", "Gauge 2 References": "", "Gauge 2 Current": "", "Gauge 2 Max": "", "Gauge 2 Color1": "", "Gauge 2 Color2": "", "--Gauge Param 3--": "", "Gauge 3 Display Name": "", "Gauge 3 References": "", "Gauge 3 Current": "", "Gauge 3 Max": "", "Gauge 3 Color1": "", "Gauge 3 Color2": "", "--Gauge Param 4--": "", "Gauge 4 Display Name": "", "Gauge 4 References": "", "Gauge 4 Current": "", "Gauge 4 Max": "", "Gauge 4 Color1": "", "Gauge 4 Color2": "", "--Gauge Param 5--": "", "Gauge 5 Display Name": "", "Gauge 5 References": "", "Gauge 5 Current": "", "Gauge 5 Max": "", "Gauge 5 Color1": "", "Gauge 5 Color2": "", "--Gauge Param 6--": "", "Gauge 6 Display Name": "", "Gauge 6 References": "", "Gauge 6 Current": "", "Gauge 6 Max": "", "Gauge 6 Color1": "", "Gauge 6 Color2": "", "--Gauge Param 7--": "", "Gauge 7 Display Name": "", "Gauge 7 References": "", "Gauge 7 Current": "", "Gauge 7 Max": "", "Gauge 7 Color1": "", "Gauge 7 Color2": "", "--Gauge Param 8--": "", "Gauge 8 Display Name": "", "Gauge 8 References": "", "Gauge 8 Current": "", "Gauge 8 Max": "", "Gauge 8 Color1": "", "Gauge 8 Color2": "", "--Gauge Param 9--": "", "Gauge 9 Display Name": "", "Gauge 9 References": "", "Gauge 9 Current": "", "Gauge 9 Max": "", "Gauge 9 Color1": "", "Gauge 9 Color2": "", "paramName": "", "XPARAM Name": "{\"hit\":\"命中率\",\"eva\":\"回避率\",\"cri\":\"会心率\",\"cev\":\"会心回避率\",\"mev\":\"魔法回避率\",\"mrf\":\"魔法反射率\",\"cnt\":\"反撃率\",\"hrg\":\"HP再生率\",\"mrg\":\"MP再生率\",\"trg\":\"TP再生率\"}", "SPARAM Name": "{\"tgr\":\"狙われ率\",\"grd\":\"防御効果率\",\"rec\":\"回復効果率\",\"pha\":\"薬の知識\",\"mcr\":\"MP消費率\",\"tcr\":\"TPチャージ率\",\"pdr\":\"物理ダメージ率\",\"mdr\":\"魔法ダメージ率\",\"fdr\":\"床ダメージ率\",\"exr\":\"経験獲得率\"}" } },
        { "name": "YEP_CoreEngine", "status": true, "description": "v1.28 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.", "parameters": { "---Screen---": "", "Screen Width": "745", "Screen Height": "400", "Scale Battlebacks": "true", "Scale Title": "true", "Scale Game Over": "true", "Open Console": "false", "Reposition Battlers": "true", "GameFont Load Timer": "0", "Update Real Scale": "false", "Collection Clear": "true", "---Gold---": "", "Gold Max": "99999999", "Gold Font Size": "20", "Gold Icon": "313", "Gold Overlap": "A lotta", "---Items---": "", "Default Max": "99", "Quantity Text Size": "15", "---Parameters---": "", "Max Level": "99", "Actor MaxHP": "9999", "Actor MaxMP": "9999", "Actor Parameter": "999", "Enemy MaxHP": "999999", "Enemy MaxMP": "9999", "Enemy Parameter": "999", "---Battle---": "", "Animation Rate": "4", "Flash Target": "false", "Show Events Transition": "true", "Show Events Snapshot": "true", "---Map Optimization---": "", "Refresh Update HP": "true", "Refresh Update MP": "true", "Refresh Update TP": "false", "---Font---": "", "Chinese Font": "SimHei, Heiti TC, sans-serif", "Korean Font": "Dotum, AppleGothic, sans-serif", "Default Font": "GameFont, Verdana, Arial, Courier New", "Font Size": "20", "Text Align": "center", "---Windows---": "", "Digit Grouping": "false", "Line Height": "36", "Icon Width": "32", "Icon Height": "32", "Face Width": "144", "Face Height": "144", "Window Padding": "18", "Text Padding": "6", "Window Opacity": "192", "Gauge Outline": "true", "Gauge Height": "6", "Menu TP Bar": "true", "---Window Colors---": "", "Color: Normal": "0", "Color: System": "0", "Color: Crisis": "17", "Color: Death": "18", "Color: Gauge Back": "19", "Color: HP Gauge 1": "20", "Color: HP Gauge 2": "21", "Color: MP Gauge 1": "22", "Color: MP Gauge 2": "23", "Color: MP Cost": "23", "Color: Power Up": "24", "Color: Power Down": "25", "Color: TP Gauge 1": "28", "Color: TP Gauge 2": "29", "Color: TP Cost Color": "29" } },
        { "name": "CBR_imgFusion", "status": false, "description": "画像合成", "parameters": {} },
        { "name": "FTKR_SkillTreeSystem", "status": true, "description": "v1.18.3 ツリー型スキル習得システム", "parameters": { "--必須設定(Required)--": "", "Skill Tree Id": "1", "--基本設定(Basic)--": "", "Show Skill Command": "0", "Command Name": "Acquire", "Skill Menu Switch ID": "0", "Enable Confirmation": "1", "Reset When Forgotten Skill": "1", "Learned Actor Var ID": "0", "Learned Skill Var ID": "0", "--習得回数の設定(Learned Count)--": "", "Enabled Skill Count": "0", "Default Max Count": "1", "Skill Learned Icon": "0", "--スキルポイントの設定(Skill Point)--": "", "SP Display Name": "SP", "Default Max SP": "0", "Default Required SP": "70", "Get Level Up Sp": "0", "Cost Sp Icon": "0", "Hide Sp Cost 0": "0", "Display Get Sp": "%1 の%2を獲得！", "Enable Class Sp": "false", "NonBattleMember Sp Rate": "100", "--スキル枠の設定(Skill Frame)--": "", "Enabled Skill Frame": "1", "Skill Frame Width": "44", "Skill Frame Height": "44", "Skill Icon Offset X": "6", "Skill Icon Offset Y": "6", "--スキルテキスト(Skill Text)--": "", "Skill Name Format": "", "Skill Text Offset X": "0", "Skill Text Offset Y": "0", "--スキル枠の色の設定(Skill Frame Color)--": "", "Frame Color isLearned": "0", "Frame Color isLearn OK": "17", "Frame Color isReqSkill NG": "15", "Frame Color isRequired NG": "16", "--習得回数の表示設定(Skill Count Frame)--": "", "Draw Count Frame": "0", "Count Frame Width": "20", "Count Frame Height": "20", "Count Frame Thick": "1", "Count Frame Offset X": "-10", "Count Frame Offset Y": "25", "Count Frame Format": "\\}\\c[0]%1\\{", "Skill Count Offset X": "5", "Skill Count Offset Y": "-10", "--ツリーの表示設定(Skill Tree Layout)--": "", "Draw Line Type": "1", "Tree Line Thick": "3", "Add Frame To Line": "0", "Fit Line Color To Frame": "0", "--スキルツリーウィンドウの設定(Skill Tree Window)--": "", "Skill Tree Max Cols": "6", "Skill Tree Height Space": "12", "--スキル説明ウィンドウの設定(Skill Status Window)--": "", "Skill Status Title Format": "\\c[14][%2]", "Adjust Skill Desc Width": "0", "Prioritize Skill Desc": "false", "--コストウィンドウの設定(Cost Window)--": "", "Cost Title Format": "\\c[14]Cost: ", "Cost Item Format": "", "Cost Number Format": "17,%1", "Cost Number Width": "0", "Cost Max Count Format": "", "--前提スキルウィンドウの設定(Pre Skill Window)--": "", "Preskill Title Format": "\\c[16]Needed Skills: ", "Preskill Item Format": "%1", "--確認ウィンドウの設定(Confirmation Window)--": "", "Conf Title Format": "Learn \\C[14]%2\\C[0]?", "Confirmation Ok Format": "Learn", "Confirmation Cancel Format": "Nevermind", "--習得時のSEの設定(Learned SE)--": "", "Learn SE Name": "Skill2", "Learn SE Volume": "90", "Learn SE Pitch": "100", "Learn SE Pan": "0", "--コストアイコンの設定(Cost Icon)--": "", "Cost Gold Icon": "297", "Cost Variables Icon": "294", "--ステータスの表示設定(Actor Status Layout)--": "", "Actor Status Text1": "SP", "Actor Status Text2": "sp", "Actor Status Text3": "SOOO", "Actor Status Space": "0,0,0,0", "Actor Status Space In Text": "0", "Actor Status Width Rate": "3,2,0", "--枠の表示設定(Frame Setting)--": "", "Skill Frame Type": "1", "Count Frame Type": "1", "Default Frame Image Index": "", "Display Tree Type Frame": "0" } },
        { "name": "sai_Scenefile", "status": true, "description": "補助ウインドウを使ったSS付セーブ画面", "parameters": { "bgBitmapFile": "save", "List X": "110", "List Y": "53", "List Width": "260", "List Height": "300", "List MaxItems": "16", "List MaxCols": "2", "List Opacity": "0", "List Font Size": "12", "Help X": "110", "Help Y": "11", "Help Width": "580", "Help Opacity": "0", "Help Font Size": "12", "State X": "373", "State Y": "36", "State Width": "300", "State Height": "350", "State Opacity": "0", "State Font Size": "12", "SS X": "4", "SS Y": "35", "SS Percent": "0.30", "Savetime X": "104", "Savetime Y": "269", "hizuke TEXT": "Date: ", "hizuke TEXT X": "-100", "hizuke TEXT Y": "100", "hizuke X": "3", "hizuke Y": "0", "Location TEXT": " Name: ", "Location TEXT X": "0", "Location TEXT Y": "162", "Location X": "75", "Location Y": "156", "Gold TEXT": " Money: ", "Gold TEXT X": "0", "Gold TEXT Y": "190", "Gold X": "75", "Gold Y": "183", "syukai TEXT": " Runs: ", "syukai TEXT X": "0", "syukai TEXT Y": "249", "syukai X": "75", "syukai Y": "243", "achieve TEXT": " ACH: ", "achieve TEXT X": "0", "achieve TEXT Y": "218", "achieve X": "75", "achieve Y": "213", "Level X": "185", "Level Y": "1", "Member X": "80", "Member Y": "800" } },
        { "name": "GraphicalDesignMode", "status": true, "description": "GUI画面デザインプラグイン\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）", "parameters": { "デザインモード": "false", "自動保存": "false", "モバイル版作成": "false", "モバイル偽装": "false", "ウィンドウ透過": "false", "グリッドサイズ": "48", "パディング": "0", "フォントサイズ": "0", "行の高さ": "0", "背景透明度": "0", "アイコンサイズ調整": "false", "背景表示可否固定": "false", "右クリックで消去": "false", "メッセージウィンドウを無視": "false" } },
        { "name": "MessageWindowPopup", "status": true, "description": "フキダシウィンドウプラグイン", "parameters": { "フォントサイズ": "15", "余白": "10", "自動設定": "false", "フェイス倍率": "1", "ウィンドウ連携": "true", "行間": "4", "ウィンドウ透過": "false", "フォントサイズ増減幅": "12", "フォントサイズ上限": "96", "フォントサイズ下限": "24", "画面内に収める": "false", "振動の速さ": "5", "振動時間": "60", "テールを使わない": "false", "最小横幅取得変数ID": "0", "最小高さ取得変数ID": "0", "lowerLimitX": "0", "upperLimitX": "0", "lowerLimitY": "0", "upperLimitY": "0" } },
        { "name": "AdjustPictureGraphical", "status": true, "description": "ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）", "parameters": { "グリッドサイズ": "0", "テストマップID": "10" } },
        { "name": "CommonPopupCore", "status": true, "description": "ver1.05/汎用的なポップアップの仕組みを提供するためのベースプラグインです。", "parameters": { "Text Back Color": "rgba(0,0,0,0.6)", "Text Back FileName": "popup_back%d" } },
        { "name": "GetInformation", "status": true, "description": "ver1.171/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。", "parameters": { "Info Disable Switch Id": "0", "Use Battle Info": "false", "Use Rewards Info": "false", "Info Pattern": "Normal", "Info Font Size": "13", "Info Count": "200", "Info Delay": "0", "Info MoveWait": "200", "Info MoveFade": "30", "Enable Out Move": "false", "Info Position": "Up", "Info Slide Action": "Down", "Info Sup X": "0", "Info Sup Y": "70", "Info Width": "220", "Gold Icon Index": "314", "Actor Icon Start Index": "320", "Reward Popup Delay": "0", "Show Get Hide Item A": "false", "Show Get Hide Item B": "false", "Log Key": "", "Log Max": "4", "Log Row": "2", "Log Reverse": "false", "Menu Info Log Name": "", "Battle Show List": "item,gold,exp,skill,params,level,abp,classLevel", "Get Gold Text": "", "Lost Gold Text": "", "Get Item Text": "", "Lost Item Text": "", "Get Item Text Num": "", "Lost Item Text Num": "", "Get Skill Text": "", "Lost Skill Text": "", "Exp Up Text": "", "Exp Down Text": "", "Lv Up Text": "", "Lv Down Text": "", "Param Up Text": "", "Param Down Text": "", "Abp Up Text": "", "Abp Down Text": "", "Class Lv Up Text": "", "Class Lv Down Text": "_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・", "Formation Lv Up Text": "\\C[4]_nameの熟練度\\C[0]が\\C[14]_numポイント\\C[24]上がった！", "Formation Lv Max Text": "\\C[4]_name\\C[0]を\\C[14]マスターした！" } },
        { "name": "PictureCallCommon", "status": true, "description": "ピクチャのボタン化プラグイン", "parameters": { "透明色を考慮": "true", "ピクチャ番号の変数番号": "47", "ポインタX座標の変数番号": "0", "ポインタY座標の変数番号": "0", "タッチ操作抑制": "false", "戦闘中常にコモン実行": "false", "無効スイッチ": "7" } },
        { "name": "MakeScreenCapture", "status": true, "description": "画面キャプチャ管理プラグイン", "parameters": { "PNGキャプチャキー": "F6", "JPEGキャプチャキー": "F7", "WEBPキャプチャキー": "none", "Ctrl同時押し": "false", "Alt同時押し": "false", "ファイル名": "image", "出力場所": "captures", "保存形式": "png", "連番桁数": "2", "タイムスタンプ": "true", "署名": "", "署名サイズ": "22", "署名画像": "", "実行間隔": "0", "効果音": "", "JPEG品質": "9" } },
        { "name": "TkoolMV_PluginCommandBook (1)", "status": true, "description": "プラグインコマンド集", "parameters": { "制御文字の拡張": "はい", "スクリプトに制御文字適用": "いいえ" } },
        { "name": "FixImageLoading", "status": true, "description": "画像ロード時のチラつき防止プラグイン", "parameters": {} },
        { "name": "EventSelector", "status": true, "description": "コモンイベントを選択するウィンドウを表示します。", "parameters": {} },
        { "name": "DTextPicture", "status": true, "description": "動的文字列ピクチャ生成プラグイン", "parameters": {} },
        { "name": "TMLogWindow", "status": true, "description": "マップシーンにログウィンドウを表示します。", "parameters": { "logWindowX": "100", "logWindowY": "100", "logWindowWidth": "480", "lines": "2", "lineHeight": "24", "padding": "10", "fontSize": "15", "startVisible": "false", "opacity": "255", "collideOpacity": "255", "messageBusyHide": "false", "eventBusyHide": "false", "maxLogs": "4", "autoDelete": "0" } },
        { "name": "PictureAnimation", "status": true, "description": "ピクチャのアニメーションプラグイン", "parameters": { "最初のセルに戻る": "false" } },
        { "name": "BMSP", "status": true, "description": "BMSPベースプラグインです。", "parameters": {} },
        { "name": "BMSP_MapFog", "status": true, "description": "マップにフォグを表示します。", "parameters": { "Label": "フォグ" } },
        { "name": "CustomizeMaxSaveFile", "status": true, "description": "最大セーブファイル数変更プラグイン", "parameters": { "セーブファイル数": "16" } },
        { "name": "CustomizeConfigDefault", "status": true, "description": "オプションデフォルト値設定プラグイン", "parameters": { "常時ダッシュ": "OFF", "コマンド記憶": "OFF", "BGM音量": "100", "BGS音量": "100", "ME音量": "100", "SE音量": "100", "常時ダッシュ消去": "ON", "コマンド記憶消去": "ON", "BGM音量消去": "OFF", "BGS音量消去": "OFF", "ME音量消去": "OFF", "SE音量消去": "OFF" } },
        { "name": "PictureVariableSetting", "status": true, "description": "ピクチャ関連のイベント機能拡張プラグイン", "parameters": { "初期値": "OFF", "ピクチャ表示最大数": "" } },
        { "name": "111_InputForm", "status": true, "description": "ゲーム画面上にHTMLの入力フォームを表示します", "parameters": { "OK Button Text": "Ok", "Display Cancel Button": "0", "Cancel Button Text": "Cancel", "Judge Switch Interval": "100", "Switch ID Selected OK": "0", "Force OK Switch ID": "0", "Force Cancel Switch ID": "0" } },
        { "name": "FontLoad", "status": true, "description": "フォントロードプラグイン", "parameters": { "フォント名1": "azuki", "フォントURL1": "fonts/azuki.ttf", "フォント名2": "kaku", "フォントURL2": "fonts/emoir-kaku.ttf", "フォント名3": "cour", "フォントURL3": "fonts/cour.ttf", "ロード完了まで待機": "ON" } },
        { "name": "MousePointerExtend", "status": true, "description": "マウスポインタ拡張プラグイン", "parameters": { "形状タイプ1": "url4", "スイッチ1": "78", "形状タイプ2": "url2", "スイッチ2": "10", "形状タイプ3": "url3", "スイッチ3": "11", "形状タイプ4": "url4", "スイッチ4": "25", "形状タイプ5": "url5", "スイッチ5": "8", "デフォルト形状タイプ": "url1", "独自画像1": "icon.png", "独自画像2": "icon3.png", "独自画像3": "icon2.png", "独自画像4": "icon4.png", "独自画像5": "icon5.png", "キー入力で消去": "", "ポインタファイルパス": "" } },
        { "name": "NoneItemNumber2", "status": true, "description": "ver1.00 アイテムリストの所持数表示に制限をかけます。", "parameters": { "listnum": "2", "shop": "2" } },
        { "name": "Mousu_base", "status": true, "description": "", "parameters": {} },
        { "name": "Parallaxtiratira", "status": true, "description": "ver1.00 ゲーム開始時にタイルセットロードの猶予を与えます。", "parameters": {} },
        { "name": "MouseWheelExtend", "status": true, "description": "マウスホイール拡張プラグイン", "parameters": { "メッセージ送り": "ON", "カーソル移動": "ON", "クリックで決定": "ON", "クリックでキャンセル": "OFF", "クリックでスイッチ": "0", "クリックでトグル": "0", "スクロールで十字キー": "OFF", "スクロールで変数": "0", "感度Y": "20", "感度X": "20" } },
        { "name": "UsableCarriageReturn", "status": true, "description": "改行コード使用可能プラグイン", "parameters": {} },
        { "name": "CRTA_TimerManager", "status": true, "description": "v1.1.0 タイマー関係の管理プラグイン", "parameters": { "Font Size": "25", "Width": "96", "Height": "48", "Position X": "502", "Position Y": "160" } },
        { "name": "YKNR_MessageKeyWord", "status": true, "description": "ゲームでよく使うキーワードを登録し、\r\n制御文字（\\KW[***]）で呼び出せるようになります。", "parameters": { "KeyWordList": "[\"{\\\"Key\\\":\\\"アクター1\\\",\\\"Word\\\":\\\"\\\\\\\\C[1]\\\\\\\\N[1]\\\\\\\\C[0]\\\"}\",\"{\\\"Key\\\":\\\"アクター2\\\",\\\"Word\\\":\\\"\\\\\\\\C[1]\\\\\\\\N[2]\\\\\\\\C[0]\\\"}\",\"{\\\"Key\\\":\\\"アクター3\\\",\\\"Word\\\":\\\"\\\\\\\\C[1]\\\\\\\\N[3]\\\\\\\\C[0]\\\"}\",\"{\\\"Key\\\":\\\"アクター4\\\",\\\"Word\\\":\\\"\\\\\\\\C[1]\\\\\\\\N[4]\\\\\\\\C[0]\\\"}\",\"{\\\"Key\\\":\\\"リーダー\\\",\\\"Word\\\":\\\"\\\\\\\\C[1]\\\\\\\\P[1]\\\\\\\\C[0]\\\"}\",\"{\\\"Key\\\":\\\"1\\\",\\\"Word\\\":\\\"\\\\\\\\C[27]❤\\\\\\\\C[0]\\\"}\",\"{\\\"Key\\\":\\\"2\\\",\\\"Word\\\":\\\"\\\\\\\\C[27]❤❤\\\\\\\\C[0]\\\"}\",\"{\\\"Key\\\":\\\"3\\\",\\\"Word\\\":\\\"\\\\\\\\C[27]❤❤❤\\\\\\\\C[0]\\\"}\"]" } },
        { "name": "Torigoya_Tween", "status": true, "description": "[ベースプラグイン] Tweenアニメーション", "parameters": {} },
        { "name": "KMS_SomStyleDamage", "status": true, "description": "[v0.1.0] ダメージ表示を聖剣 3 スタイルにします。", "parameters": { "MaxSpeed X": "0.7", "InitialSpeed Y": "-6", "Delay Y": "-0.2" } },
        { "name": "CharacterPopupDamage", "status": true, "description": "キャラクターのダメージポッププラグイン", "parameters": { "効果音演奏": "true", "消音スイッチID": "0", "X座標補正": "12", "Y座標補正": "0", "HP自動ポップアップ": "true", "MP自動ポップアップ": "true", "TP自動ポップアップ": "true", "増加自動ポップアップ": "true", "減少自動ポップアップ": "true", "MPダメージ音": "", "回転": "false", "X方向半径": "40", "Y方向半径": "40", "回転速度": "60", "拡大率": "100", "拡大率変化値": "0", "最前面表示": "true" } },
        { "name": "PawnShop", "status": false, "description": "ver1.01 売却専門ショップを作ります", "parameters": { "nobuy": "251", "category": "1150", "sellprice": "1151" } },
        { "name": "Yami_SkipTitle", "status": true, "description": "テストプレイ用にタイトルシーンを飛ばすことができます。", "parameters": {} },
        { "name": "CustomizeErrorScreen", "status": true, "description": "エラー画面表示改善プラグイン", "parameters": { "メインメッセージ": "以下のエラーが発生しました。", "ハイパーリンク": "", "詳細情報出力": "ON" } },
        { "name": "UTA_CommonSave", "status": true, "description": "共有のセーブデータを作成し、指定したスイッチ・変数の状態をセーブデータ間で共有します。", "parameters": { "Target Switches": "180,965,1301-1314,14-20,414,1121-1130,1319,1321-1480,1722-1814,420,440,460,480,500,520,540,560,580,600,589,261-272,1316,529,530,491,513,553,555,572,591,562,582,642-648,453,553,1070-1080,583,483", "Target Variables": "813,1104-1130,1601-1618,1621-1632,1641-1660,1223,1226,1229,1232,1235,1238,1243,1246,1249,1252,501-503,1221-1238,1241-1252,1131-1140,2020,516,1147-1148,1173,512,515,511,520,509,2101-2115,2121-2135,2141-2155,2161-2175,2181-2195,2201-2215,2221-2235,2241-2255,2261-2275,2281-2295,253-254,2000-2001", "Is Auto": "false", "Auto on Gameover": "false", "Show Trace": "false" } },
        { "name": "UTA_MessageSkip", "status": true, "description": "特定キーを押す事でメッセージをスキップできるようにします。", "parameters": { "Skip Key": "control", "Show Trace": "false" } },
        { "name": "GraphicsRenderFix", "status": true, "description": "放置していると画面がフリーズするのを修正", "parameters": {} },
        { "name": "Chronus", "status": true, "description": "ゲーム内時間の導入プラグイン", "parameters": { "月ごとの日数配列": "31,28,31,30,31,30,31,31,30,31,30,31", "月名配列": "Jan.,Feb.,Mar.,Apr.,May.,Jun.,Jul.,Aug.,Sep.,Oct.,Nov.,Dec.", "曜日配列": "(日),(月),(火),(水),(木),(金),(土)", "自然時間加算": "0", "自然時間加算間隔": "0", "場所移動時間加算": "0", "戦闘時間加算(固定)": "0", "戦闘時間加算(ターン)": "0", "年のゲーム変数": "0", "月のゲーム変数": "0", "日のゲーム変数": "0", "曜日IDのゲーム変数": "0", "曜日名のゲーム変数": "0", "時のゲーム変数": "239", "分のゲーム変数": "240", "累計時間のゲーム変数": "0", "累計日数のゲーム変数": "0", "時間帯IDのゲーム変数": "0", "天候IDのゲーム変数": "0", "フォーマット時間の変数": "0", "フォーマット時間の計算式": "HH24 * 60 + MI", "日時フォーマット1": "HH24:MI", "日時フォーマット2": "", "日時フォーマット行間": "0", "カレンダー表示X座標": "0", "カレンダー表示Y座標": "0", "カレンダーフォントサイズ": "0", "カレンダー不透明度": "192", "カレンダー枠の非表示": "false", "カレンダーの非表示": "false", "カレンダー余白": "8", "文字盤画像ファイル": "clock_0", "長針画像ファイル": "clock_02", "短針画像ファイル": "clock_03", "時計X座標": "685", "時計Y座標": "50", "イベント中時間経過": "false" } },
        { "name": "DWindow", "status": false, "description": "動的ウィンドウ生成プラグイン", "parameters": { "X座標の変数番号": "76", "Y座標の変数番号": "77", "横幅の変数番号": "78", "高さの変数番号": "79", "最前面に表示": "true", "ピクチャに含める": "31" } },
        { "name": "MakeScreenMovie", "status": true, "description": "ゲーム動画作成プラグイン", "parameters": { "FunkKeyRecord": "F10", "RecordSwitchId": "0", "FileName": "movie_\\d", "Location": "records", "IncludeAudio": "true", "MimeType": "自動", "RefreshRate": "30" } },
        { "name": "PictureDrag", "status": true, "description": "ピクチャのドラッグ移動プラグイン", "parameters": {} },
        { "name": "DevToolsManage", "status": false, "description": "総合開発支援プラグイン", "parameters": { "開始時に起動": "true", "リロードキー": "F12", "最前面に表示キー": "F11", "高速化切替キー": "", "強制戦闘勝利キー": "", "強制戦闘敗北キー": "", "強制戦闘中断キー": "", "スクリプト実行キー": "", "フリーズキー": "F10", "Ctrl同時押し": "false", "Alt同時押し": "false", "FPS表示": "OFF", "タイトルカット": "false", "高速開始": "false", "高速スピード": "2", "メッセージスキップ無効": "false", "モバイル偽装": "false", "メニューバー表示": "true", "クリックメニュー": "1", "JSON形式セーブ": "false", "起動時情報出力": "true", "最前面で起動": "false", "リロード機能を使う": "true", "右寄せ座標": "640", "挨拶非表示": "false", "誕生月": "0", "誕生日": "0" } },
        { "name": "Nupu_AnimeSetter", "status": true, "description": "ぬぷ竜の暗黒プログラム::弄っちゃダメよ", "parameters": {} },
        { "name": "BugFixImageOnLoad", "status": true, "description": "画像ロード遅延時のエラー修正プラグイン", "parameters": {} },
        { "name": "SceneGlossary", "status": true, "description": "ゲーム内用語辞典プラグイン", "parameters": { "GlossaryInfo": "[\"{\\\"GlossaryType\\\":\\\"1\\\",\\\"CommandName\\\":\\\"Dictionary\\\",\\\"UseCategory\\\":\\\"true\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"アルバム\\\",\\\"SelectAction\\\":\\\"0\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"ConfirmX\\\":\\\"0\\\",\\\"ConfirmY\\\":\\\"0\\\",\\\"GlossaryHelp\\\":\\\" Photo Description\\\",\\\"CategoryHelp\\\":\\\" Photo Type\\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"true\\\",\\\"CompleteMessage\\\":\\\" Total %1 ％\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"false\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"240\\\",\\\"VisibleItemNotYet\\\":\\\" -------------\\\",\\\"HideIcon\\\":\\\"true\\\"}\"]", "Layout": "", "FontSize": "11", "AutoResizePicture": "true", "PicturePosition": "top", "PictureAlign": "left", "PicturePriority": "top", "ThroughBackPicture": "true", "FramelessDesign": "true", "NewGlossaryColor": "17", "PageWrap": "true", "TextPosition": "137", "AutoAddition": "false", "SwitchAutoAdd": "0", "VariableAutoAdd": "0", "AutoAdditionEnemy": "false", "CategoryOrder": "", "CategoryUnusable": "", "ShowPageNumber": "true" } },
        { "name": "DisableFastForward", "status": true, "description": "イベント高速化禁止プラグイン", "parameters": {} },
        { "name": "ItemCountPlugin", "status": true, "description": "アイテムの合計数を取得するプラグインです。", "parameters": {} },
        { "name": "YKNR_ShopSettingsEx", "status": true, "description": "ショップの設定を拡張します。装備コマンドの追加や\r\n価格レートの設定、売却専用ショップなどが設定できます。", "parameters": { "BuyPriceRate": "{\"Base\":\"100\",\"UseVar\":\"0\"}", "SellPriceRate": "{\"Base\":\"50\",\"UseVar\":\"0\"}", "IsEnableEquipment": "false", "IsDirectOpenList": "true", "IsSortForSellList": "true" } },
        { "name": "LongCancelled", "status": false, "description": "右クリックによる長押し機能", "parameters": {} },
        { "name": "MessageWindowHidden", "status": true, "description": "メッセージウィンドウ一時消去プラグイン", "parameters": { "triggerButton": "[\"shift\"]", "triggerSwitch": "0", "linkPictureNumbers": "[\"74\",\"63\"]", "linkShowPictureNumbers": "[]", "disableLinkSwitchId": "680", "disableSwitchId": "0", "disableInBattle": "true", "disableInChoice": "true" } },
        { "name": "SAN_Fix_SeBuffers", "status": true, "description": "SEバッファ修正 1.0.0\n不具合修正プラグインです。複数の演奏中のSEを正常に停止できるようにします。", "parameters": {} },
        { "name": "Nupu_OtherSystem", "status": true, "description": "", "parameters": {} }
    ];
