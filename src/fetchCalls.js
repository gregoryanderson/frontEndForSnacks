import React from 'react'

export const getRequest = async() => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL+ '/api/v1/snacks'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message)
      throw new Error ("Failed to get snacks")
    }
  }