You are building a single dealer platform / application which will allow users to make foreign currency trades.

#####Part 1
Story: As a user, I can input an amount and a currency

Acceptance criteria
1. The currency is a dropdown selection supporting the following currencies: CAD, GBP, EUR
2. The artifact shows an X button to clear out the amount but only if you are on a mobile device with a width of
360px or less.
3. The artifact can be reused in other parts of the application

#####Part 2
Story: As a user, After entering an amount and selecting a currency, the application should show me a USD equivalent
amount. This result should not be part of the artifact above.

Acceptance criteria
1. The conversion occurs server side
2. The conversion algorithm: input value multiplied by 2 + a random markup between $0 and $1, ie 0.16
3. The update from the backend to the UI is async

Bonus:
#####Part 3
Story: As a user, I should see the rate from the server constantly updating.

Acceptance criteria
1. The update from the server comes every 100ms
2. The UI reflects the updated value
Notes:
1. You are encouraged to write the front end in ReactJS and backend in Java but are free to use the technologies
you are most comfortable with.
2. Part 3 is optional and will not result in lost marks.
