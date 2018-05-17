angular.module("cookbook").run(["$templateCache", function($templateCache) {$templateCache.put("/src/template/AddRecipe.html","<div class=\"modal-header\">\r\n    <h3 class=\"modal-title\" id=\"modal-title\">{{modal.title}}</h3>\r\n</div>\r\n<div class=\"modal-body\" id=\"modal-body\">\r\n    <ul>\r\n        <li ng-repeat=\"item in $ctrl.items\">\r\n            <a href=\"#\" ng-click=\"$event.preventDefault(); $ctrl.selected.item = item\">{{ item }}</a>\r\n        </li>\r\n    </ul>\r\n    Selected: <b>{{ $ctrl.selected.item }}</b>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"$ctrl.ok()\">OK</button>\r\n    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"$ctrl.cancel()\">Cancel</button>\r\n</div>\r\n");
$templateCache.put("/src/template/DeleteRecipe.html","<div class=\"modal-header\">\r\n    <h3 class=\"modal-title\" id=\"modal-title\">I\'m a modal!</h3>\r\n</div>\r\n<div class=\"modal-body\" id=\"modal-body\">\r\n    <ul>\r\n        <li ng-repeat=\"item in $ctrl.items\">\r\n            <a href=\"#\" ng-click=\"$event.preventDefault(); $ctrl.selected.item = item\">{{ item }}</a>\r\n        </li>\r\n    </ul>\r\n    Selected: <b>{{ $ctrl.selected.item }}</b>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"$ctrl.ok()\">OK</button>\r\n    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"$ctrl.cancel()\">Cancel</button>\r\n</div>");
$templateCache.put("/src/template/EditRecipe.html","\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                <h4 class=\"modal-title\">Edit Recipe</h4>\r\n            </div>\r\n            <div class=\"modal-body EditFields\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\">Recipe Title</label>\r\n                    <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" value=\"Vegetable Samosas\" ng-model=\"modal.title\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\">Recipe Description</label>\r\n                    <div class=\"col-sm-9\">\r\n                        <textarea class=\"form-control\" id=\"\">Vegetables in a curry sauce wrapped and fried until golden brown</textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\">Recipe Ingredients</label>\r\n                    <div class=\"col-sm-9\">\r\n                        <textarea class=\"form-control\" id=\"\">2 tablespoons vegetable oil, 4 medium potatoes, peeled and cut into 1/2-inch cubes, 1/2 cup chopped yellow onion, 3/4 cup canned peas and carrots,  drained 1 cup Red Curry Sauce,   Flour for baking sheet,   12 large wonton wrappers</textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\">Recipe Instructions</label>\r\n                    <div class=\"col-sm-9\">\r\n                        <textarea class=\"form-control\" id=\"\">\"In large skillet heat 2 tablespoons oil over medium heat. Add potatoes and onion; cook stirring constantly. About 15 minutes or until soft. Add peas and carrots and curry sauce and cook 4-5 minutes. Cool.\", \"Lightly flour baking sheet. Cut each wonton wrapper in half on the diagonal to make 2 triangles. Spoon 1-2 tablespoons filling in center of each triangle. Brush edges of wrappers with water; fold in half to form a triangle and press edges together to seal. Transfer to prepared baking sheet.\", \"In deep-fryer heat oil to 350 degrees F. Fry samosas a few at a time. Turning occasionally for 2-3 minutes or until golden brown. Drain on paper towels. Serve with chutney.\"</textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");}]);