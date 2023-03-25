const formatDate = (date) => {
    const format = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }

    const dateString =  new Intl.DateTimeFormat('en-US', format).format(date);

    return dateString
  
}

export default formatDate;