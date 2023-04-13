$(function () {

    $('.demo').ripples({

        // Image Url
        resolution: 1000,
			perturbance: 0.1,
      


      
        // The width and height of the WebGL texture to render to. 
        // The larger this value, the smoother the rendering and the slower the ripples will propagate.
        // resolution: 256,
      
        // // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
        // dropRadius: 20,
      
        // // Basically the amount of refraction caused by a ripple. 
        // // 0 means there is no refraction.
        // perturbance: 0.04,
      
        // // Whether mouse clicks and mouse movement triggers the effect.
        // interactive: true,
      
        // // The crossOrigin attribute to use for the affected image. 
        // crossOrigin: ''
        
      });

    // try {
	// 	$('body').ripples({
	// 		resolution: 512,
	// 		dropRadius: 20, //px
	// 		perturbance: 0.04,
	// 	});
	// 	$('#background').ripples({
	// 		resolution: 128,
	// 		dropRadius: 100, //px
	// 		perturbance: 0.04,
	// 		interactive: false
	// 	});
	// }
	// catch (e) {
	// 	$('.error').show().text(e);
	// }

// console.log("ripples.js");
//   $(".background").ripples({
//     imageUrl: null,
//     resolution: 256,
//     dropRadius: 20,
//     perturbance: 0.04,
//     interactive: true,
//     crossOrigin: "",
//   });


}); //main end
