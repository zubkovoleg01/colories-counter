Preview: 


![image](https://github.com/zubkovoleg01/ColoriesCounter/assets/120819704/a063103f-b8e1-4ba4-b476-ba104a165124)

TECHNOLOGIES USED:

● HTML

● CSS

● JavaScript

FUNCTIONAL:


Default state:

● The male gender is selected.

● There is 0 in the input fields.

● The "minimum" physical activity is selected.

● The "Calculate" button is inactive.

● The data reset button from the input fields is inactive.

● The block with the output of information about calories is hidden.


The "Calculate" button:

● Becomes active only when all input fields are filled in.

● By clicking on the button, a block with information about calories appears, if it has not been shown before. If the block is already on the page, clicking on the button updates the calculations, up-to-date information is displayed.


"Clear fields and calculation" button:

● Becomes active when at least one numeric field is filled in.

● When clicked, all elements of the application are reset to the default state: numeric fields are cleared (placeholder 0), gender becomes male, physical activity is "minimal", the block with information about calories is hidden.


Formulas:

● Maintaining weight

● For women:
N = (10 × weight in kilograms) + (6.25 × height in centimeters) − (5 × age in years) − 161

● For men:
N = (10 × weight in kilograms) + (6.25 × height in centimeters) − (5 × age in years) + 5

● The resulting value (N) is multiplied by the activity coefficient. The result will be the norm of calories to maintain weight.


Activity coefficients:

● Minimum: 1.2.

● Low: 1.375.

● Average: 1.55.

● High: 1.725.

● Very high: 1.9.


Formulas for weight gain and weight loss:

● Weight gain: we add 15% of the norm to this norm.

● Weight loss: we subtract 15% of the norm from this norm.

