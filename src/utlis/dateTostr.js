export const dateToStr = publishedDate => {
  return (
    [
      publishedDate.getDate() + '/',
      publishedDate.getMonth() + 1 + '/',
      publishedDate.getFullYear()
    ]
  )
}