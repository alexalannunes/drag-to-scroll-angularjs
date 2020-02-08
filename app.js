var app = angular.module("plunker", []);

app.component("listItem", {
  bindings: {
    item: "="
  },
  template: `<div class="item">item-{{$ctrl.item}}</div>`,
  transclude: true
});

app.directive("listItems", function() {
  return {
    template: `<div class="list">
      <list-item ng-repeat="a in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,94,68,95]" item="a"></list-item>
    </div>`,
    link: function($scope, $element) {
      let isDown = false;
      let slider = $element[0].children[0];
      let startX;
      let scrollLeft = slider.scrollLeft;

      console.log(slider);

      $element.bind("mousedown", function(e) {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      $element.bind("mousemove", function(e) {
        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;

        const walk = x - startX;

        console.log(slider.scrollLeft);
        // console.log(e.pageX - slider.scrollLeft)

        slider.scrollLeft = scrollLeft - walk;

        console.log(slider);
      });

      $element.bind("mouseleave", function(e) {
        isDown = false;
      });

      $element.bind("mouseup", function(e) {
        isDown = false;
      });
    }
  };
});

app.controller("MainCtrl", function($scope) {});
