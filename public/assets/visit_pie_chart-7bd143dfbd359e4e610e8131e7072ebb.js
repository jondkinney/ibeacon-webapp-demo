$(document).ready(function(){var t=function(t){if(1==$("#"+t).length){var n=document.getElementById(t).getContext("2d"),o=$("#"+t).data("visits"),a={animation:!1};new Chart(n).Doughnut(o,a)}};t("smooth-doughnut-chart"),t("doughnut-chart")});