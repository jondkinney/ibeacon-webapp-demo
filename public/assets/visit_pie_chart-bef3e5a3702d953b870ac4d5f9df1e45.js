$(document).ready(function(){var t=function(t){if(1==$("#"+t).length){var n=document.getElementById(t).getContext("2d"),e=$("#"+t).data("visits"),a={animationEasing:"easeOutBounce"};new Chart(n).Doughnut(e,a)}};t("smooth-doughnut-chart"),t("doughnut-chart")});