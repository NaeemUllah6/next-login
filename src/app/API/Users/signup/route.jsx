import { connect } from '@/app/dbConfig/dbConfig'
import User from '@/Models/userModal'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()
export async function POST(request) {
    try {
        const reqBody = request.json()
        const { usernaem, email, password } = reqBody
        console.log(reqBody);
        await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: 'user already exist' })
        }

    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
