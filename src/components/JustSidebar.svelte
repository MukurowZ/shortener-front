<div class="just-sidebar absolute">
	<div class="header" style="background:color black;"></div>
	<input type="checkbox" class="opensidebarmenu" id="opensidebarmenu">

	<div class="circle">
		<label for="opensidebarmenu" class="sidebaricontoggle">
			<div class="spinner diagonal-part-1"></div>
			<div class="spinner horizontal"></div>
			<div class="spinner diagonal-part-2 "></div>
		</label>
	</div>

	<div id="sidebarmenu">
		<ul class="sidebarmenuinner">
			<Router>
				{#each routes as routeItem}
					<Link to="{routeItem.path}">
						<li>
							{routeItem.name}
							{#if routeItem.description}
								<span>{routeItem.description}</span>
							{/if}
						</li>
					</Link> 
				{/each}
			</Router>
		</ul>
	</div>
</div>

<script lang="ts">
import { Router, Route, Link } from "svelte-routing";
// import { RouteItem } from '@/types/index.ts';

export let routes: RouteItem[] = [];
</script>

<style lang="scss">
.just-sidebar {
    #sidebarmenu {
        height: 100%;
        position: fixed;
        left: 0;
        width: 250px;
        margin-top: 59px;
        transform: translateX(-250px);
        transition: transform 250ms ease-in-out;
        background: linear-gradient(180deg, #fc477b 0%, #3f5efb 100%);
    }

    .sidebarmenuinner {
        margin: 0px;
        padding: 0px;
        border-top: 1px solid rgba(255, 255, 255, 0.10);

        li {
            list-style: none;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            padding: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.10);
            @apply cursor-pointer ;

            span {
                display: block;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.50);
            }

            a {
                color: white;
                text-transform: uppercase;
                text-decoration: none;
            }
        }
    }

    input[type="checkbox"]:checked ~ #sidebarmenu {
        transform: translateX(0);
    }

    input[type="checkbox"] {
        transition: all 0.3s;
        box-sizing: border-box;
        display: none;
    }

    .sidebaricontoggle {
        transition: all 0.3s;
        box-sizing: border-box;
        cursor: pointer;
        position: absolute;
        z-index: 10;
        height: 100%;
        width: 100%;
        top: 22px;
        left: 15px;
        height: 15px;
        width: 22px;

        .spinner {
            transition: all 0.3s;
            box-sizing: border-box;
            position: absolute;
            height: 3px;
            width: 100%;
            background-color: rgb(255, 255, 255);
            border-radius: 0.75rem !important;
        }

        .horizontal {
            transition: all 0.3s;
            box-sizing: border-box;
            position: relative;
            float: left;
            margin-top: 0.2rem;
        }
    
        .diagonal-part-1 {
            position: relative;
            transition: all 0.3s;
            box-sizing: border-box;
            float: left;
        }
    
        .diagonal-part-2 {
            position: relative;
            transition: all 0.3s;
            box-sizing: border-box;
            float: left;
            margin-top: 0.2rem;
            // @apply diagonal-part-1 ;
        }
    }

    .circle {
        padding: 0.2rem;
        // margin: 0.2rem;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        background: linear-gradient(180deg, #f9c596 0%, #fc5d9d 100%);
    }
}
</style>
