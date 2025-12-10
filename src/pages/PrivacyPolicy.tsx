import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

const PrivacyPolicy: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-8"
        >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <h1 className="text-3xl font-bold text-slate-800">個人情報保護方針</h1>
                </div>

                <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Tomomi Era（以下、「当方」）は、提供するサービス（以下、「本サービス」）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」）を定めます。
                    </p>

                    <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第1条（個人情報）</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                    </p>

                    <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第2条（個人情報の収集方法）</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        当方は、ユーザーがお問い合わせをする際に氏名、メールアドレスなどの個人情報を尋ねることがあります。
                    </p>

                    <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第3条（個人情報を収集・利用する目的）</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        当方が個人情報を収集・利用する目的は、以下のとおりです。
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                        <li>当方サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li>上記の利用目的に付随する目的</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第4条（利用目的の変更）</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        当方は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
                    </p>

                    <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第5条（個人情報の第三者提供）</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        当方は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                    </p>

                    <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第6条（お問い合わせ窓口）</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        本ポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default PrivacyPolicy
