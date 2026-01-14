import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Page />)
    expect(screen.getByText(/The Royal Taste of/i)).toBeInTheDocument()
  })

  it('displays the price', () => {
    render(<Page />)
    expect(screen.getByText(/₹100/i)).toBeInTheDocument()
  })

  it('shows halal certification badge', () => {
    render(<Page />)
    expect(screen.getByText(/100%/i)).toBeInTheDocument()
    expect(screen.getByText(/Halal/i)).toBeInTheDocument()
  })

  it('displays heritage section', () => {
    render(<Page />)
    expect(screen.getByText(/The Story of Hyderabadi Dum Biryani/i)).toBeInTheDocument()
  })
})
