import React from "react";
import { render } from "@testing-library/react";
import Square from ".";
import '@testing-library/jest-dom';

describe('vou realizar alguns testes com square', () => {

    it('verificar se o widh do square tem 100px', () => {

        const { container } = render(<Square />)

        expect(container.firstChild).toHaveStyle('width: 200px')
    })

})
