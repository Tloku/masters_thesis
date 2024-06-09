from frameworkPickerAngularLogic import AngularPickLogic
from frameworkPickerReactLogic import ReactPickLogic
from frameworkPickerVueLogic import VuePickLogic
from frameworkPickerUI import launch


angular = AngularPickLogic()
# angular.visualize_membership_functions()
react = ReactPickLogic()
vue = VuePickLogic()

launch(angular, react, vue)
