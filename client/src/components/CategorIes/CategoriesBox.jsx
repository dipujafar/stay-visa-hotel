import PropTypes from 'prop-types';
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string';

const CategoriesBox = ({label, icon:Icon, selected}) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleQuery = () =>{
        let currentQuery = {};
        if(params){
            currentQuery = qs.parse(params.toString());
        }
            const updatedQuery = {...currentQuery, category : label}

            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            });

            navigate(url)
        
    }
    params.get('category')
    return (
        <div onClick={handleQuery} className={`flex flex-col items-center justify-center gap-2 p-3 hover:text-neutral-600 transition cursor-pointer ${selected ? "border-b-2 border-neutral-900":""}`}>
            <Icon size={26}></Icon>
            {label}
        </div>
    );
};

CategoriesBox.propTypes = {
   label: PropTypes.string,
   icon : PropTypes.string,
   selected : PropTypes.bool
  };

export default CategoriesBox;