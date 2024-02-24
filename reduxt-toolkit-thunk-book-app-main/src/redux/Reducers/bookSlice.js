import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const URL = "https://mybook-redux-toolkit-training-back.onrender.com"
export const getBooks = createAsyncThunk("book/getBooks", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    //api request
    try {
        const res = await fetch(`${URL}/Books`)
        const data = await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const insertBook = createAsyncThunk("book/insertBook", async (dataBooks, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI
    //api req
    try {
        dataBooks.userName = getState().authSlice.name
        const res = await fetch(`${URL}/Books`, {
            method: "POST",
            body: JSON.stringify(dataBooks),
            headers: {
                "content-type": "application/json ; charset=UTF-8"
            },

        })
        const data = await res.json()
        // dispatch(islogInOut())
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteBook = createAsyncThunk(`${URL}/deleteBook`, async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    // req api 
    try {
        await fetch(`https://mybook-redux-toolkit-training-back.onrender.com/Books/${item.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json ; charset=UTF-8"
            },
        })
        return item
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getBook = createAsyncThunk(`${URL}/getBook`, async (item, _) => {
    return item
})

const bookSlice = createSlice({
    name: "book",
    initialState: { books: [], error: null, bookInfo: null },
    extraReducers: {
        //getBooks
        [getBooks.pending]: (state, action) => {
            state.books = state.books
            state.error = null
        },
        [getBooks.fulfilled]: (state, action) => {
            state.books = action.payload

        },
        [getBooks.rejected]: (state, action) => {
            state.error = action.payload
        },

        //insertBook
        [insertBook.pending]: (state, action) => {
            state.books = state.books
            state.error = null

        },
        [insertBook.fulfilled]: (state, action) => {
            state.books.push(action.payload)
        },
        [insertBook.rejected]: (state, action) => {
            state.error = action.payload
        },

        // deleteBook
        [deleteBook.pending]: (state, action) => {
            state.error = null
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.books = state.books.filter(el => el.id !== action.payload.id)
        },
        [deleteBook.rejected]: (state, action) => {
            state.error = action.payload
        },
        // getBook
        [getBook.fulfilled]: (state, action) => {
            state.bookInfo = action.payload
        },

    }
})

export default bookSlice.reducer