import { test } from 'vitest'
import { render, screen } from '@testing-library/vue'
import App from '@/App.vue'

test('SimpleTest', async () => {
  render(App)

  screen.getByText('A very simple page')

})