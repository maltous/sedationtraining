function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Gjd34VYuWR":
        Script1();
        break;
      case "5qaSqkGXm2o":
        Script2();
        break;
      case "5xioLkuiilh":
        Script3();
        break;
      case "6TTUoZ4d7J1":
        Script4();
        break;
      case "670E71ZXpnX":
        Script5();
        break;
      case "6LJcwkjOAqD":
        Script6();
        break;
      case "5aJ4I8wzYzF":
        Script7();
        break;
      case "6a8g6LydHpH":
        Script8();
        break;
      case "6WS1yd89RHi":
        Script9();
        break;
      case "5jMCiRhAtY4":
        Script10();
        break;
      case "685c9Uix6xZ":
        Script11();
        break;
      case "6eVutGTPfui":
        Script12();
        break;
      case "5joO2Ur3H45":
        Script13();
        break;
      case "6h5yQ09Lmpt":
        Script14();
        break;
      case "5xYLQnRofCS":
        Script15();
        break;
      case "5xTOnBI86jg":
        Script16();
        break;
      case "6Mn52bdkj2x":
        Script17();
        break;
      case "6KFsQ0j1e0c":
        Script18();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  $("#tab-customlink").hide();
}

function Script13()
{
  $("#tab-customlink").hide();
}

function Script14()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script15()
{
  $("#tab-customlink").hide();
}

function Script16()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script17()
{
  $("#tab-customlink").show();
}

function Script18()
{
  window.print();
}

