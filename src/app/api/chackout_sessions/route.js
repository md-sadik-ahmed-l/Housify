import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { stripe } from "@/lib/stripe"
import { auth } from "@/lib/auth"

export async function POST(request) {
    try {
        const headersList = await headers()
        const origin = headersList.get("origin")

        const userSession = await auth.api.getSession({
            headers: await headers()
        })
        const user = userSession?.user

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const formData = await request.formData()

        const price = formData.get("price") 
        const phone = formData.get("phone")
        const notes = formData.get("notes")
        const moveInDate = formData.get("moveInDate")
        
        const title = formData.get("title")
        const productId = formData.get("productId")
        const role = formData.get("role")
        const ownerId = formData.get("ownerId")

        const session = await stripe.checkout.sessions.create({
            customer_email: user.email,
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        unit_amount: Math.round(Number(price) * 100), // cents এ convert

                        product_data: {
                            name: `${title}`
                        }
                    },
                    quantity: 1
                }
            ],
            metadata: {
                userId: user.id,
                userEmail: user.email,
                tenantName: user.name,
                title,
                productId,
                phone,
                notes,
                moveInDate,
                totalPrice: price,
                role,
                ownerId
            },
            mode: "payment",
            success_url: `${origin}/all-properties/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/all-properties/${productId}` // cancel করলে property page এ ফিরবে
        })

        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 })
    }
}