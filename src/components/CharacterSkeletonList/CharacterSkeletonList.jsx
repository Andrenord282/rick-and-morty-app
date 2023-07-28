//-----modules-----//
import classNames from "classnames";

//-----components-----//
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

//-----style-----//
import 'react-loading-skeleton/dist/skeleton.css';
import './CharacterSkeletonList.scss';

const CharacterSkeletonList = (props) => {
    const { classes, count } = props;

    return (
        new Array(count).fill(0).map((_, index) => {
            return (
                <div key={index} className={classNames(classes, 'character-skeleton')}>
                    <SkeletonTheme baseColor="#97ce4c" highlightColor="#fff874" enableAnimation={true}  >
                        <div className="character-skeleton__img">
                            <Skeleton circle count={1} width={'100%'} height={'100%'} />
                        </div>
                        <div className="character-skeleton__descr">
                            <div className="character-skeleton__descr-item">
                                <Skeleton count={1} width={'100%'} height={'100%'} />
                            </div>
                            <div className="character-skeleton__descr-item">
                                <Skeleton count={1} width={'100%'} height={'100%'} />
                            </div>
                            <div className="character-skeleton__descr-item">
                                <Skeleton count={1} width={'100%'} height={'100%'} />
                            </div>
                            <div className="character-skeleton__descr-item">
                                <Skeleton count={1} width={'100%'} height={'100%'} />
                            </div>
                            <div className="character-skeleton__descr-item">
                                <Skeleton count={1} width={'100%'} height={'100%'} />
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
            );
        })
    );

};

export default CharacterSkeletonList;