import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Login = () => {
  const [crediential, setcrediential] = useState({
    username: '',
    password: ''
  })
  const { user, loading, error, dispatch } = useContext(AuthContext)

  const handleChange = (e) => {
    setcrediential(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("http://localhost:3000/backend/auth/login", crediential)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL", payload: err.response?.data || "Login failed" })
    }
  }

  console.log(user)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
