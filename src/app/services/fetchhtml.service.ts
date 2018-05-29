import { Injectable } from '@angular/core';

@Injectable()
export class FetchHtmlService {

  safeHtmlContent: string;
  constructor() { }

  setValue() {
    return `
    <!DOCTYPE html>
    <html xmlns:MadCap="http://www.madcapsoftware.com/Schemas/MadCap.xsd" xml:lang="no" lang="no" data-mc-search-type="Stem" data-mc-help-system-file-name="Default.xml" data-mc-path-to-help-system="https://help.visma.net/no_no/approval/" data-mc-target-type="WebHelp2" data-mc-runtime-file-type="Topic" data-mc-preload-images="false" data-mc-in-preview-mode="false" data-mc-toc-path="Kom i gang">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Roller</title>
    <link href="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Slideshow.css" rel="stylesheet" data-mc-generated="True" />
    <link href="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/TextEffects.css" rel="stylesheet" data-mc-generated="True" />
    <link href="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Topic.css" rel="stylesheet" data-mc-generated="True" />
    <link href="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Components/Styles.css" rel="stylesheet" data-mc-generated="True" />
    <link href="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Components/Tablet.css" rel="stylesheet" data-mc-generated="True" />
    <link href="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Components/Mobile.css" rel="stylesheet" data-mc-generated="True" />
    <link href="https://help.visma.net/no_no/approval/Resources/Stylesheets/vismanet.css" rel="stylesheet" />
    <script src="https://help.visma.net/no_no/approval/Resources/Scripts/custom.modernizr.js">
    </script>
    <script src="https://help.visma.net/no_no/approval/Resources/Scripts/jquery.min.js">
    </script>
    <script src="https://help.visma.net/no_no/approval/Resources/Scripts/require.min.js">
    </script>
    <script src="https://help.visma.net/no_no/approval/Resources/Scripts/require.config.js">
    </script>
    <script src="https://help.visma.net/no_no/approval/Resources/Scripts/foundation.min.js">
    </script>
    <script src="https://help.visma.net/no_no/approval/Resources/Scripts/plugins.min.js">
    </script>
    <script src="https://help.visma.net/no_no/approval/Resources/Scripts/MadCapAll.js">
    </script>
    </head>
    <body>
    <p>
    <script data-mc-conditions="global.country_norway">/*<![CDATA[<meta name="language" content="no">]]>*/</script>
    </p>
    <p>
    <script src="https://knowledge-and-support-center.visma.net/Content/app/help/flare-script.js">
    </script>
    </p>
    <div class="MCBreadcrumbsBox_0"><span class="MCBreadcrumbsPrefix"> <![CDATA[ ]]></span><a class="MCBreadcrumbsLink" href="mini-tocs/getting-started-mini-toc.htm">Kom i gang</a><span class="MCBreadcrumbsDivider"> &gt; </span><span class="MCBreadcrumbs">Roller</span>
    </div>
    <h1><span class="SystemTitle">Roller</span>
    </h1>
    <p>Når du kjøper <span class="globalproduct_vismanet">Visma.net</span>, må din <span class="globalcompany_name">Visma</span> partner gi deg de rette tilgangsrollene. Enten din <span class="globalcompany_name">Visma</span>-partner eller du kan så tildele roller til brukerne av de aktiverte <span class="globalcompany_name">Visma</span>-tjenestene.</p>
    <p>Her skal vi beskrive rollene som er relevante for bruk av <span class="gui">Visma.net Approval</span>.</p>
    <div class="MCDropDown MCDropDown_Open dropDown"><span class="MCDropDownHead dropDownHead"><a href="javascript:void(0);" class="MCDropDownHotSpot dropDownHotspot MCDropDownHotSpot_"><img class="MCDropDown_Image_Icon" src="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Images/transparent.gif" height="16" width="16" alt="Closed" data-mc-alt2="Open" /><span class="globalrole_customer_administrator">Customer Administrator</span></a></span>
    <div class="MCDropDownBody dropDownBody">
    <p><span class="globalrole_customer_administrator">Customer Administrator</span> rollen brukes vanligvis av den <span class="globalrole_visma_partner">Visma-partner</span>. Denne rollen gir ingen tilgang til ditt firma i <span class="globalservice_approval">Visma.net Approval</span>.</p>
    <p><span class="globalrole_customer_administrator">Customer Administrator</span> kan:</p>
    <ul>
    <li value="1">Opprett ditt firma</li>
    <li value="2">Aktiver kjøpte tjenester</li>
    <li value="3">Tildel roller</li>
    </ul>
    </div>
    </div>
    <div class="MCDropDown MCDropDown_Open dropDown"><span class="MCDropDownHead dropDownHead"><a href="javascript:void(0);" class="MCDropDownHotSpot dropDownHotspot MCDropDownHotSpot_"><img class="MCDropDown_Image_Icon" src="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Images/transparent.gif" height="16" width="16" alt="Closed" data-mc-alt2="Open" /><span class="globalrole_approval_systemadmin">System Administrator</span></a></span>
    <div class="MCDropDownBody dropDownBody">
    <p>Systemadministratoren for <span class="globalservice_approval">Visma.net Approval</span> har tilgang til flere vinduer i <span class="globalservice_approval">Visma.net Approval</span> som lar deg konfigurere tjenesten og overvåke alle brukeres oppgaver.</p>
    <p>Systemadministratoren har tilgang til følgende vinduer:</p>
    <p><span class="gui">Dokumentoversikt</span>: Gir tilgang til alle dokumentene i firmaet og lar deg behandle <span class="gui">Blokkerte</span>dokumenter.</p>
    <p><span class="gui">Prosessoversikt</span>: Gir tilgang til alle aktive og ferdigstilte arbeidsflytprosesser.</p>
    <p><span class="gui">Oppgaveoversikt</span>: Gir tilgang til alle oppgavene i firmaet og lar deg tildele oppgaver på nytt til andre godkjennere.</p>
    <p><span class="gui">Innstillinger</span>: Lar deg opprette og administrere og administrere alle stedfortredere i firmaet.</p>
    </div>
    </div>
    <div class="MCDropDown MCDropDown_Open dropDown"><span class="MCDropDownHead dropDownHead"><a href="javascript:void(0);" class="MCDropDownHotSpot dropDownHotspot MCDropDownHotSpot_"><img class="MCDropDown_Image_Icon" src="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Images/transparent.gif" height="16" width="16" alt="Closed" data-mc-alt2="Open" />System Viewer</a></span>
    <div class="MCDropDownBody dropDownBody">
    <p>Systemviseren er en rolle tiltenkt revisorer og partnere eller støttebehandlere, for å hjelpe deg om nødvendig. Systemviseren har følgende tilgangsrettigheter:</p>
    <p><span class="gui">Dokumentoversikt</span>: Viser alle dokumenter i firmaet, men kan ikke sende dokumenter for godkjenning eller godkjenne/avvise direkte.</p>
    <p><span class="gui">Prosessoversikt</span>: Viser de aktive og fullførte arbeidsflytprosessene.</p>
    <p><span class="gui">Oppgaveoversikt</span>: Viser alle oppgavene i et firma, men kan ikke tildele oppgaver på nytt til andre godkjennere.</p>
    <p><span class="gui">Innstillinger</span>: Viser innstillingene som er tilgjengelig for systemadministratoren, men kan ikke endre dem.</p>
    <p>Systemviseren mottar ingen e-postmeddelelser og vises ikke i nedtrekksmenyer. Det er derfor ikke mulig å tildele oppgaver til systemviseren.</p>
    </div>
    </div>
    <div class="MCDropDown MCDropDown_Open dropDown"><span class="MCDropDownHead dropDownHead"><a href="javascript:void(0);" class="MCDropDownHotSpot dropDownHotspot MCDropDownHotSpot_"><img class="MCDropDown_Image_Icon" src="https://help.visma.net/no_no/approval/Skins/Default/Stylesheets/Images/transparent.gif" height="16" width="16" alt="Closed" data-mc-alt2="Open" /><span class="globalrole_approver_general">Approver</span></a></span>
    <div class="MCDropDownBody dropDownBody">
    <p>Avhengig av hvilke tjenester du har aktivert, kan du tildele forskjellige godkjennerroller til brukere. Godkjennerne har bare tilgang til sine oppgaver og til et begrenset sett innstillinger.</p>
    <p>Følgende godkjennerroller er tilgjengelig:</p>
    <p><span class="gui">Absence Approver</span>:&#160;For å godkjenne fraværsforespørsler som medarbeidere sender via <span class="globalservice_absence">Visma.net Calendar</span>.</p>
    <p><span class="gui">Cost Request Approver</span>: For å godkjenne kostnadsforespørsler som ansatte sender via <span class="globalservice_costrequest">Visma.net Cost Request</span>.</p>
    <p><span class="gui">Expense Approver</span>: For å godkjenne kostnadslister som ansatte sender via <span class="globalservice_expense">Visma.net Expense</span>.<span class="globalservice_financials">Visma.net Financials</span></p>
    <p><span class="gui">Invoice Approver</span>: For å godkjenne fakturaer fra leverandører. Disse fakturaene kan kunne sendes fra <span class="globalservice_financials">Visma.net Financials</span>, <span class="globalproduct_account_view">AccountView</span> eller <span class="globalproduct_doc_center">Visma Document Center</span>.</p>
    <p><span class="gui">Information Approver</span>: For å godkjenne informasjon som for eksempel leverandørinformasjon sendt fra <span class="globalproduct_control">Visma Control</span>.</p>
    <p><span class="gui">Timesheet Approver</span>: For å godkjenne timelister som kommer inn fra prosjektmodulen i <span class="globalservice_financials">Visma.net Financials</span>.</p>
    <p><span class="gui">Voucher Approver</span>: For å godkjenne bilag sent fra <span class="globalproduct_control">Visma Control</span>.</p>
    </div>
    </div>
    <p class="seealso">Se også:</p>
    <p>
    <img src="https://help.visma.net/no_no/approval/Resources/Images/icon-document-link.png" style="vertical-align: text-bottom;" />&#160;&#160;&#160;&#160;<a href="introduction.htm" class="MCXref xref">Innledning</a></p>
    <p>
    <img src="https://help.visma.net/no_no/approval/Resources/Images/icon-document-link.png" style="vertical-align: text-bottom;" />&#160;&#160;&#160;&#160;<a href="mini-tocs/integrations-mini-toc.htm" class="MCXref xref">Integrering med andre tjenester</a></p>
    <p>
    <img src="https://help.visma.net/no_no/approval/Resources/Images/icon-document-link.png" style="vertical-align: text-bottom;" />&#160;&#160;&#160;&#160;<a href="tasks-gettingstarted.htm" class="MCXref xref">Komme i gang med oppgaver</a></p>
    <p>
    <img src="https://help.visma.net/no_no/approval/Resources/Images/icon-document-link.png" style="vertical-align: text-bottom;" />&#160;&#160;&#160;&#160;<a href="glossary.htm" class="MCXref xref">Ordliste</a></p>
    <!-- Google Tag Manager -->
    <noscript><iframe src="http://www.googletagmanager.com/ns.html?id=GTM-TX6VLP" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <script>/* <![CDATA[ */(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TX6VLP');/* ]]> */</script>
    <!-- End Google Tag Manager -->
    </body>
    </html>
    `;
  }



  getHtml(){
   return this.setValue();
  }

}
