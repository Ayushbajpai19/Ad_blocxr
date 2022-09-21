chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}},
    {urls: defaultFilters},
    ["blocking"]
)


    defaultFilters = [
        "*://*.doubleclick.net/*",
        "*://partner.googleadservices.com/*",
        "*://*.googlesyndication.com/ *",
        "*://*.google-analytics.com/*",
        "*://creative.ak.fbcdn.net/*",
        "*://*.adbrite.com/*",
        "*://*.exponential.com/*",
        "*://*.quantserve.com/*",
        "*://*.scorecardresearch.com/*",
        "*://*.zedo.com/*",
        "https://www.googleadservices.com/pagead/aclk?sa=L&ai=CSN2CJyIiY7G_NMmQ3LUPoM62-AaFy8bva-_Y2dGyEJjlpMePDhABIMWKqjRg5crlg7QOoAGFpKTTA8gBAakCcc2v8WMISz6oAwHIA8MEqgTWAU_QQEndMLmVXAkc1BgiMxbnItCBHdzlgsybkpJ07GWvMgdqH9FLq29heaqt6ViaZ09JcQQ9DRDjWIl19vxK--wRlCOix4Pq5Dbb-AzgZVcJrXSJ0XwJ7fvvJo4WDgGsIRehjGWpW7DemBtq_v2Gw_azrHasUb6dX317_fhbOmQnZIzwrDEZvwXLo2qxn6Vsz48l47EZ2_ZJvLh5-FO88DUePx6BmUePSNvwldGzOoa_8DzjisnzJ1RYVUlCpBnIaIQjsXe9_U5tOe6zkRI8uPHSrLF5l9DABPva7pGJBKAGZoAH49vbLKgHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAeaBqgH89EbqAeW2BuoB6qbsQKoB9-fsQLYBwHSCA8IgGEQARgfMgKKAjoCgECxCQUAuiSjeRiOgAoBmAsByAsBuAwB2BMMiBQB0BUB-BYBgBcB&ae=1&num=1&cid=CAASJORoh17xB3E8p5GyE1okrzGwFyT95rezR3EugtCn2zLRxaegRQ&sig=AOD64_0hktgTKIqj2t64zFQ5ECZYPd02OQ&client=ca-pub-4873206820526136&nb=0&adurl=https://excelr.in/tableau-training-in-bangalore/%3Fsource%3Dgoogle%26medium%3Dadwords%26campaign%3D%7Bcampaign%7D%26adgroup%3D%7Badgroup%7D%26keyword%3D%26device%3Dc%26matchtype%3D%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_term%3D%26utm_content%3D617148625093%26utm_device%3Dc%26utm_campaign%3DSearch-Tableau-Bangalore%26utm_adgroup%3DSearch-Tableau-Course-Phrase%26utm_location%3DBangalore%26gclid%3DEAIaIQobChMI8e6yrfmU-gIVSQi3AB0gpw1vEAEYASAAEgL94vD_BwE",
        "*://*.ebay.com/*",
	"*://pune.craigslist.org//*",
	"*://*.gumtree.com/*",
	"*://*.gumtree.com/*",
	"*://oodle.com/*",
	"*://*.adpost.com/*",
	"*://*.hoobly.com/*",
	"*://*.salespider.com/*",
	"*://*.adsglobe.com/*",
	"*://*.yakaz.com/*"
        ]
