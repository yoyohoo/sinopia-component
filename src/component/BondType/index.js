import { BondTypes } from './index.sets'

export default {
    props: ['dropDown', 'onSelect', 'noCategory'],
    data() {
        return {
            current: [0]
        }
    },
    computed: {
        types() {
            if (this.dropDown !== undefined || this.noCategory !== undefined) {
                return BondTypes.filter(t => !t.category)
            } else {
                return BondTypes
            }
        },
        count() {
            return BondTypes.filter(t => t.category).length
        }
    },
    methods: {
        onCalc() {
            let result = [];
            this.types.map(m => {
                this.current.indexOf(m.index) + 1 > 0
                    && (result = result.concat(m.value))
            })
            return result;
        },
        onClick(type) {
            let result = [],
                cnt = this.count,
                arr = this.current;
            let {
                flag,
                index,
                value
            } = type;
            switch (flag) {
                case 1:
                    this.current = [];
                    this.current.push(index);
                    result = value;
                    break;
                default:
                    if (arr.indexOf(index) + 1 > 0) {
                        this.current = arr.filter(s => (s != index && s > cnt))
                    } else {
                        this.current = arr.filter(s => s > cnt)
                        this.current.push(index)
                    }
                    result = this.onCalc();
                    break;
            }
            let len = this.current.length;
            !len && this.current.push(len)
            this.onSelect.call(this, result)
        }
    },
}