// Ensures that exam progress correctly calculates its info
it('exam progress calculations are correct', () => {
	const page = cy.visit('/projects/exam/');

	// 90 minute exam
	page.get('#time').type('90');
	// Half way through
	page.get('#time-spent').type('45');

	// 40 total marks
	page.get('#marks').type('40');

	const output = page.get('#marks-output');

	output
		.find('p')
		.should('have.text', 'You have 2.25 minutes per mark')
		.should('have.text', 'You have 20 marks completed so far');
});
